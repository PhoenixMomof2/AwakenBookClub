class BooksController < ApplicationController
  skip_before_action :authorized, only: [:index, :show]
  
  def index
    books = Book.all
    render json: books, status: :ok
  end

  def show
    book = find_book
    render json: book, status: :ok
  end

  private
  def book_params
    params.permit(:title, :book_img, :author, :stars, :category, :content)
  end

  def find_book
    Book.find_by_id(params[:id])
  end
end
