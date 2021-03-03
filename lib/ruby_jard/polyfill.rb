# frozen_string_literal: true

class Object
  # This is just Tryable#try! from ActiveSupport, but with the return added
  def jard_nilsafe(method_name = nil, *args, &b)
    return nil if nil?
    if method_name.nil? && block_given?
      if b.arity == 0
        instance_eval(&b)
      else
        yield self
      end
    else
      public_send(method_name, *args, &b)
    end
  end
end

class Thread
  attr_accessor :name unless Thread.method_defined?(:name)
end
