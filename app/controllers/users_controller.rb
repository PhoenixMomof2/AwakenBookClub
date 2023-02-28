class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  #SignUp
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: 201
  end

  def index
    render json: User.all, status: :ok
  end

  def show
    render json: current_user
  end
  
  def user_comments
    render json: current_user.comments
  end

  def user_books
    render json: current_user.books
  end

  private
  def user_params
    params.permit(:username, :password, :password_confirmation, :age, :bio)
  end
end
