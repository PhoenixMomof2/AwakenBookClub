class UsersController < ApplicationController

  def index
    render json: User.all 
  end

  def show
    user = User.find_by_id(id: session[:user_id])
    render json: user
  end

  #SignUp
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  private
  def user_params
    params.permit(:username, :password, :password_confirmation, :age)
  end
end
