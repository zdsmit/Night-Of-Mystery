class ScenarioSerializer
  include FastJsonapi::ObjectSerializer
  attributes :text
  has_many :responses
end
