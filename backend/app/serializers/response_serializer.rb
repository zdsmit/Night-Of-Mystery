class ResponseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :number, :text
  belongs_to :scenario
end
