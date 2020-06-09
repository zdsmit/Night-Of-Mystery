class ResponseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :number, :text
end
