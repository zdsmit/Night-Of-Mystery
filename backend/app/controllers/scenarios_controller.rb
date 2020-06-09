class ScenariosController < ApplicationController

  def index
    scenarios = Scenario.all
    render json: ScenarioSerializer.new(scenarios)
  end

end
