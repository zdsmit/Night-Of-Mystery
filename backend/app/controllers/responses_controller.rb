class ResponsesController < ApplicationController

  def index
    responses = Response.all
    render json: ResponseSerializer.new(responses)
  end

end
