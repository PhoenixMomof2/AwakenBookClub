class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  #SignUp
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: 201
  end

  def show
    render json: current_user, status: :ok
  end
  
  # Write a custom route that takes in a word or a string and then renders 
  # json of all the users who have left comments on books that belong to that category. 
  # If there are no matches no books that have that category render json that says so.

  # def books_by_category      
  # #   byebug
  #   # if category?
  #     books = Book.all.select {|b, user| b.category = params[:category]}
  #     render json: books
  #   # else
  #   #   render json: { error: "Category not found" }
  #   # end
  # end

  def index
    render json: User.all, status: :ok
  end 

  private
  def user_params
    params.permit(:username, :password, :password_confirmation, :age, :bio)
  end
end

