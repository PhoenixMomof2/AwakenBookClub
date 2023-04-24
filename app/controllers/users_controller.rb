class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :users_by_age]

  # Write a custom route that takes in a parameter of a number 
  # that will then go to a custom action where you find all the 
  # users who are above that age.

  # Once you have found all the users who meet that 
  # requirement, find all the books that they have commented 
  # on and render them as json. If no users are found render 
  # a message is json saying there are no users above the 
  # age of ___, where the specific number provided as a parameter is referenced.

  # GET /users_by_age/:n
  def users_by_age  
    users = User.all.select{ |user| user.age > params[:n].to_i }
    if users.length > 0      
      books = users.collect{ |user| user.books }
      users_books = books.flatten!.uniq
      books_with_comments = users_books.select { |book| book.comments.length > 0 }
      titles = books_with_comments.pluck(:title)
      render json: titles   
    else 
      render json: { message: "There are no users above the age of #{params[:n].to_i}" }
    end
  end

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

