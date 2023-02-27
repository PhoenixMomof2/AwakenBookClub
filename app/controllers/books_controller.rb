class BooksController < ApplicationController
  skip_before_action :authorized, only: [:index, :show]
  
  # GET /books/:id
  def index
    books = Book.all
    render json: books, status: :ok
  end

  # GET /books/:id
  def show
    @book = find_book
    render json: @book, status: :ok
  end

  # POST /comments
  def create
      book = current_user.books.create!(book_params)
      render json: book, status: :created
  end

  private
  def book_params
    params.permit(:title, :book_img, :author, :stars, :category, :content)
  end

  def find_book
    @book = Book.find(params[:id])
  end
end
