class BooksController < ApplicationController
  # skip_before_action :authorized, only: [:index, :show]
  load_and_authorize_resource
  
  def index
    books = Book.all
    render json: books, status: :ok
  end

  def show
<<<<<<< HEAD
    @book = find_book
    render json: @book, status: :ok
=======
    @book = Book.find(params[:id])
    authorize! :read, @book
>>>>>>> 949f89fbce1e74c3b4ede59f3fbb6f1090b53f10
  end

  # def show
  #   book = find_book
  #   render json: book, status: :ok
  # end

  private
  def book_params
    params.permit(:title, :book_img, :author, :stars, :category, :content)
  end

  def find_book
    @book = Book.find(params[:id])
  end
end
