class BooksController < ApplicationController
  skip_before_action :authorize, only: [:index, :show, :comments_by_category]
  
  # GET /commented_books/:count
  def commented_books
    books = Book.all.select { |book| book.comments.count > (params[:count]).to_i }
    render json: books
  end

  # GET /books
  def index
    if params[:user_id]
      @user = User.find_by_id(params[:user_id])
      render json: @user.books.order("title ASC"), status: :ok
    else
      render json: Book.all.order("title ASC"), status: :ok
    end    
  end

  # GET /books/:id
  def show
    @book = Book.find_by_id(params[:id])
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