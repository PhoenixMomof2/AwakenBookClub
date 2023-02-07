class BooksController < ApplicationController
  skip_before_action :authorize, only: :index
  
  def index
    books = Book.all
    render json: books
    #how to include group comments
  end

  def show
    book = find_book
    render json: book
  end

  def create
  end

  private
  def book_params
    params.permit(:title, :book_img, :author, :stars, :category, :content)
  end

  def find_book
    Book.find_by_id(params[:id])
  end

  #Error handling
  def render_unprocessable_entity(invalid)
    render json: { error: invalid.record.errors }, status: :unprocessable_entity
  end
end
