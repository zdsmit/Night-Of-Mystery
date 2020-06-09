class ScenarioSerializer
  include FastJsonapi::ObjectSerializer
  attributes :text, :responses
  has_many :responses
end
