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

  private
  def book_params
    params.permit(:title, :book_img, :author, :stars, :category, :content)
  end

  def find_book
    @book = Book.find_by_id(params[:id])
  end
end
