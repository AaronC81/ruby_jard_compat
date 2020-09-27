# frozen_string_literal: true

module RubyJard
  module Commands
    # Continue and skip one, or more next breakpoints.
    class SkipCommand < BaseCommand
      include RubyJard::Commands::ValidationHelpers

      group 'RubyJard'
      description 'Continue and skip one, or more next breakpoints.'
      match 'skip'
      help_doc './next_command.doc.txt'

      def process
        times = validate_positive_integer!(args.first || 1)

        RubyJard::ControlFlow.dispatch(:skip, times: times.to_i)
      end
    end
  end
end

Pry::Commands.add_command(RubyJard::Commands::SkipCommand)
