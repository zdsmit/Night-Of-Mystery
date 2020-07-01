class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
      users = User.all
      render json: UserSerializer.new(users)
    end

    def create
      user = User.create(name: params[:name])
      render json: UserSerializer.new(user)
    end
  
end