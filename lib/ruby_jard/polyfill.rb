# frozen_string_literal: true

class Object
  # This is just Tryable#try! from ActiveSupport
  def jard_nilsafe(method_name = nil, *args, &b)
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
