class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]

  #SignUp
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: 201
  end

  def show
    render json: current_user, status: :ok
  end

  def index
    render json: User.all, status: :ok
  end
  
  private
  def user_params
    params.permit(:username, :password, :password_confirmation, :age, :bio)
  end
end
