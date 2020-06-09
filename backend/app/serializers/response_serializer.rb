class ResponseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :number, :text, :scenario_id
  belongs_to :scenario
end
