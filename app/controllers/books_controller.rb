class BooksController < ApplicationController
  skip_before_action :authorized, only: [:index, :show]
  
  # GET /books
  def index
    render json: Book.all, status: :ok
  end

  # GET /books/:id
  def show
    @book = find_book
    render json: @book, status: :ok
  end

  # POST /books (do I need the include user?)
  def create
      @book = Book.create!(book_params)
      render json: @book, status: :created
  end

  private
  def book_params
    params.permit(:title, :book_img, :author, :stars, :category, :content)
  end

  def find_book
    @book = Book.find(params[:id])
  end
end
