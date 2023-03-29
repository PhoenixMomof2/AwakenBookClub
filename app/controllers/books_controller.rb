class BooksController < ApplicationController
  skip_before_action :authorize, only: [:index, :show, :comments_by_category]
  
  # GET /books
  def index
    if params[:user_id]
      @user = User.find_by_id(params[:user_id])
      render json: @user.books, status: :ok
    else
      render json: Book.all, status: :ok
    end    
  end

  # GET /books/:id
  def show
    @book = find_book
    render json: @book, status: :ok
  end

  # POST /books 
  def create
    @book = Book.create!(book_params)
    render json: @book, status: :created
  end

  # Write a custom route that takes in a word or a string and then renders 
  # json of all the users who have left comments on books that belong to that category. 
  # If there are no matches no books that have that category render json that says so.
  # def comments_by_category      
  #   byebug
  #   comments = Book.all.filter { |b| b.category = params[:category] }
  #   render json: comments
  # end

  private
  def book_params
    params.permit(:title, :book_img, :author, :stars, :category, :content)
  end

  def find_book
    @book = Book.find_by_id(params[:id])
  end
end
