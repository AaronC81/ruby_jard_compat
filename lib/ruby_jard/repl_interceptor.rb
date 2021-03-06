# frozen_string_literal: true

begin
  require 'pty'
rescue LoadError
  # Ignore, fallback not to use interceptor
end

module RubyJard
  # Pry depends heavily on GNU Readline, or any Readline-like input libraries. Those libraries
  # serve limited use cases, and specific interface to support those. Unfortunately, to serve
  # Jard's keyboard functionalities, those libraries must support individual keyboard events,
  # programmatically input control, etc. Ruby's GNU Readline binding obviously doesn't support
  # those fancy features. Other pure-ruby implementation such as coolline, tty-reader is not
  # a perfit fit, while satisfying performance and boringly stablility of GNU Readline. Indeed,
  # while testing those libraries, I meet some weird quirks, lagging, cursor jumping around.
  # Putting efforts in a series of monkey patches help a little bit, but it harms in long-term.
  # Re-implementing is just like jumping into another rabbit hole.
  #
  # That's why I come up with another approach:
  # - Create a proxy wrapping around pry instance, so that it reads characters one by one, in
  # *raw* mode
  # - Keyboard combinations are captured and handled before piping the rest to the pry instance
  # - The proxy interacts with Pry's REPL loop via Pry hooks (Thank God) to seamlessly switch
  # between *raw* mode and *cooked* mode while Pry interacts with TTY.
  # - Control flow instructions are threw out, and captured by ReplProcessor.
  #
  #                             +------- Intercept key binding
  #                             v                ^
  #   Resize signal +---> Escape sequence        |
  #                             +                |
  # +-----------------+         v        +-------+-------+
  # |    Thread 1     |        PIPE <----+ Listen Thread <--+ STDIN
  # +-----------------+         +        +---------------+
  #                             |
  # +-----------------+         v
  # | Stopping thread +--> Pry REPL loop +----> Capture and dispatch command
  # +-----------------+         +
  #                             |
  # +-----------------+         v        +---------------+
  # |    Thread 2     |        PTY  +----> Output Thread +--> STDOUT
  # +-----------------+         +        +---------------+
  #                             |
  #                             |
  #                             +-------> Discard escape sequence
  #
  # As a result, Jard may support key-binding customization without breaking pry functionalities.
  class ReplInterceptor
    KEY_READ_TIMEOUT = 0.2    # 200ms
    OUTPUT_TICK = 1.to_f / 60 # 60hz

    def initialize(state, console)
      @state = state
      @console = console
      @key_bindings = RubyJard.config.key_bindings

      reopen_streams
      start_output_bridge
    end

    def start
      reopen_streams
      start_key_listen_thread
    end

    def stop
      if interceptable?
        sleep OUTPUT_TICK until @state.exited?
      end
      @key_listen_thread.jard_nilsafe(:exit) if @key_listen_thread.jard_nilsafe(:alive?)
    end

    def dispatch_command(command)
      @input_writer.write(
        "#{RubyJard::ReplSequence.encode(command)}\n"
      )
    end

    def feed_output(content)
      @output_writer.write(content)
    end

    def feed_input(content)
      @input_writer.write(content)
    rescue IOError
      # Nothing to do. Discard the content
    end

    def original_input
      @console.input
    end

    def original_output
      @console.output
    end

    def redirected_input
      @input_reader
    end

    def redirected_output
      @output_writer
    end

    def interceptable?
      return false unless defined?(PTY)
      return false if defined?(Reline) && Readline == Reline
      return false if RubyJard::Reflection.instance.call_method(::Readline, :input=).source_location != nil
      return false if RubyJard::Reflection.instance.call_method(::Readline, :output=).source_location != nil

      true
    end

    private

    def reopen_streams
      unless interceptable?
        @input_reader = @console.input
        @input_writer = @console.input
        @output_reader = @console.output
        @output_writer = @console.output
        return
      end

      if !defined?(@input_reader) || @input_reader.closed? || @input_writer.closed?
        @input_reader, @input_writer = IO.pipe
      end

      if !defined?(@output_reader) || @output_reader.closed? || @output_writer.closed?
        @output_reader, @output_writer = PTY.open
      end
    end

    def start_output_bridge
      return unless interceptable?

      @output_bridge_thread = Thread.new { output_bridge }
      @output_bridge_thread.abort_on_exception = true
      @output_bridge_thread.report_on_exception = false
      @output_bridge_thread.name = '<<Jard: Pty Output Thread>>'
    end

    def start_key_listen_thread
      return unless interceptable?

      @main_thread = Thread.current
      @key_listen_thread = Thread.new { listen_key_press }
      @key_listen_thread.abort_on_exception = true
      @key_listen_thread.report_on_exception = false
      @key_listen_thread.name = '<<Jard: Repl key listen >>'
    end

    def output_bridge
      loop do
        begin
          if @state.exiting?
            if @output_reader.ready?
              write_output(@output_reader.read_nonblock(2048))
            else
              @state.exited!
            end
          elsif @state.exited?
            sleep OUTPUT_TICK
          else
            content = @output_reader.read_nonblock(2048)
            unless content.nil?
              write_output(content)
            end
          end
        rescue IO::WaitReadable, IO::WaitWritable
          # Retry
          sleep OUTPUT_TICK
        end
      end
    rescue StandardError
      # This thread shoud never die, or the user may be freezed, and cannot type anything
      sleep 0.5
      retry
    end

    def listen_key_press
      loop do
        break if @input_writer.closed?
        break if @state.exiting? || @state.exited?

        if @state.processing? && @state.pager?
          # Discard all keys unfortunately
          sleep OUTPUT_TICK
        else
          key = @key_bindings.match { @console.getch(KEY_READ_TIMEOUT) }
          if key.is_a?(RubyJard::KeyBinding)
            handle_key_binding(key)
          elsif !key.empty?
            @input_writer.write(key)
          end
        end
      end
    rescue StandardError
      # This thread shoud never die, or the user may be freezed, and cannot type anything
      sleep 0.5
      retry
    end

    def handle_key_binding(key_binding)
      case key_binding.action
      when 'interrupt'
        handle_interrupt_command
      else
        @state.check(:ready?) do
          dispatch_command(key_binding.action)
        end
      end
    end

    def handle_interrupt_command
      @state.check(:ready?) do
        @main_thread.jard_nilsafe(:raise, Interrupt) if @main_thread.jard_nilsafe(:alive?)
      end
      loop do
        begin
          sleep OUTPUT_TICK
        rescue Interrupt
          # Interrupt spam. Ignore.
        end
        break unless @main_thread.jard_nilsafe(:pending_interrupt?)
      end
    end

    def write_output(content)
      return if RubyJard::ReplSequence.detect(content)

      @console.write content.force_encoding('UTF-8')
    end
  end
end
