# frozen_string_literal: true

module RubyJard
  ##
  # User classes may override basic Kernel methods, such as #inspect
  # or #to_s, or even #is_a?. It's not very wise to call those methods
  # directly, as there maybe side effects. Therefore, this class is
  # to extract unbound methods from Kernel module, and then call them
  # in Object's context.
  #
  # TODO: my fix here is Bad!
  class Reflection
    def self.instance
      @instance ||= new
    end

    def call_is_a?(object, comparing_class)
      object.is_a?(comparing_class)
    end

    def call_method(object, method_name)
      object.method(method_name)
    end

    def call_class(object)
      object.class
    end

    def call_respond_to?(object, method_name)
      object.respond_to?(method_name)
    end

    def call_instance_variables(object)
      object.instance_variables
    end

    def call_instance_variable_get(object, variable)
      object.instance_variable_get
    end

    def call_instance_variable_set(object, variable, value)
      object.instance_variable_set(variable, value)
    end

    def call_inspect(object)
      object.inspect
    end

    def call_to_s(object)
      object.to_s
    end

    def call_const_get(object, const_name)
      object.const_get(const_name)
    end

    def call_const_defined?(object, const_name)
      object.const_defined?(const_name)
    end
  end
end

# Quesiton: Why this?
# Answer: The whole purpose of existence of this class is to dispatch Ruby's
# kernel methods on a object's context to prevent override or monkey-patching.
# The early all methods are stored, the safer Jard behaves.
RubyJard::Reflection.instance
