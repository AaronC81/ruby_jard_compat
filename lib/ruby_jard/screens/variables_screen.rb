# frozen_string_literal: true

module RubyJard
  module Screens
    class VariablesScreen < RubyJard::Screen
      KINDS = [
        KIND_ARG = :arg,
        KIND_LOC = :loc,
        KIND_INS = :ins,
        KIND_CON = :con
      ].freeze

      KIND_PRIORITIES = {
        KIND_ARG => 1,
        KIND_LOC => 2,
        KIND_INS => 3,
        KIND_CON => 4
      }.freeze

      KIND_COLORS = {
        KIND_ARG => :bright_white,
        KIND_LOC => :bright_white,
        KIND_INS => :yellow,
        KIND_CON => :green
      }.freeze

      def draw
        @output.print TTY::Box.frame(
          **default_frame_styles.merge(
            top: @row, left: @col, width: @layout.width, height: @layout.height
          )
        )

        @output.print TTY::Cursor.move_to(@col + 1, @row)
        @output.print decorate_text
          .with_highlight(true)
          .text('Variables ', :bright_yellow)
          .content

        decorated_variables.first(data_size).each_with_index do |variable, index|
          @output.print TTY::Cursor.move_to(@col + 1, @row + index + 1)
          @output.print variable.content
        end
      end

      private

      def data_size
        @layout.height - 1
      end

      def current_binding
        RubyJard.current_session.frame._binding
      end

      def current_frame
        RubyJard.current_session.frame
      end

      def current_frame_scope
        RubyJard.current_session.backtrace[RubyJard.current_session.frame.pos][1]
      end

      def current_frame_scope_class
        RubyJard.current_session.backtrace[RubyJard.current_session.frame.pos][2]
      end

      def decorated_variables
        return [] if current_frame.nil?

        variables = fetch_local_variables + fetch_instance_variables + fetch_constants

        sort_variables(variables).map do |kind, name, value|
          decorated_variable(kind, name, value)
        end.flatten
      end

      def fetch_local_variables
        variables = current_binding.local_variables
        # Special treatment for args
        arg_variables = current_frame.args.map(&:last)
        # Exclude Pry's sticky locals
        pry_sticky_locals =
          if variables.include?(:pry_instance)
            current_binding.local_variable_get(:pry_instance).sticky_locals.keys
          else
            []
          end
        variables -= pry_sticky_locals
        variables.map do |variable|
          begin
            if arg_variables.include?(variable)
              [KIND_ARG, variable, current_binding.local_variable_get(variable)]
            else
              [KIND_LOC, variable, current_binding.local_variable_get(variable)]
            end
          rescue NameError
            nil
          end
        end.compact
      end

      def fetch_instance_variables
        current_frame_scope.instance_variables.map do |variable|
          begin
            [KIND_INS, variable, current_frame_scope.instance_variable_get(variable)]
          rescue NameError
            nil
          end
        end.compact
      end

      def fetch_constants
        # Filter out truly constants (CONSTANT convention) only
        constants = current_frame_scope_class.constants.select { |v| v.to_s.upcase == v.to_s }
        constants.map do |variable|
          begin
            [KIND_CON, variable, current_frame_scope_class.const_get(variable)]
          rescue NameError
            nil
          end
        end.compact
      end

      def decorated_variable(kind, name, value)
        text =
          decorate_text
          .text(decoreated_kind(kind))
          .text(' ')
          .with_highlight(true)
          .text(name.to_s, kind_color(kind))
          .text(addition_data(value), :white)
          .text(' = ')
          .with_highlight(false)
        inspect_texts = inspect_value(text, value)
        text.text(inspect_texts.first, :bright_white)


        # TODO: Fix this ugly code
        [text] +
        inspect_texts[1..-1].map do |line|
          decorate_text
            .with_highlight(false)
            .text('    ')
            .text(line, :bright_white)
        end
      end

      def addition_data(value)
        if value.is_a?(Array) && !value.empty?
          " (size: #{value.length})"
        elsif value.is_a?(String) && value.length > 20
          " (size: #{value.length})"
        else
          ''
        end
      end

      def inspect_value(text, value)
        # Split the lines, add padding to align with kind
        length = @layout.width - 6
        value_inspect = value.inspect.to_s

        start_pos = 0
        end_pos = @layout.width - 2 - text.length

        texts = []
        3.times do |index|
          texts << value_inspect[start_pos..end_pos]
          start_pos = end_pos + 1
          end_pos += length
          break if end_pos >= value_inspect.length
        end

        if end_pos < value_inspect.length
          texts.last[texts.last.length - 6..texts.last.length - 1] = ' [...]'
        end

        texts
      end

      def decoreated_kind(kind)
        decorate_text
          .with_highlight(false)
          .text(kind.to_s, :white)
      end

      def kind_color(kind)
        KIND_COLORS[kind] || :white
      end

      def sort_variables(variables)
        # Sort by kind
        # Sort by "internal" character so that internal variable is pushed down
        # Sort by name
        variables.sort do |a, b|
          if KIND_PRIORITIES[a[0]] != KIND_PRIORITIES[b[0]]
            KIND_PRIORITIES[a[0]] <=> KIND_PRIORITIES[b[0]]
          else
            a_name = a[1].to_s.gsub(/^@/, '')
            b_name = b[1].to_s.gsub(/^@/, '')
            if a_name[0] == '_' && b_name[0] == '_'
              a_name.to_s <=> b_name.to_s
            elsif a_name[0] == '_'
              1
            elsif b_name[0] == '_'
              -1
            else
              a_name.to_s <=> b_name.to_s
            end
          end
        end
      end
    end
  end
end

RubyJard::Screens.add_screen(:variables, RubyJard::Screens::VariablesScreen)
