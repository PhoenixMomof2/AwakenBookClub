class BooksController < ApplicationController
  skip_before_action :authorize, only: [:index, :show, :books_by_category]
  
  # GET /commented_books/:count
  def commented_books
    books = Book.all.select { |book| book.comments.count > (params[:count]).to_i }
    render json: books
  end

  # GET /books_by_category/:category
  def books_by_category      
    books = Book.all.select {|b| b.category === params[:category]}
    if books.length > 1
      render json: books
    else
      render json: { error: "Category not found" }
    end
  end

  # GET /books_by_author/:n
  def books_by_author
    books = Book.all.select{ |book| book.author.length > params[:n].to_i }
    if books.length > 1
      render json: books
    else
      render json: { message: "No books found" }
    end
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
    render json: @book, include: ['user', 'user_comments'], status: :created
  end 

  private
  def book_params
    params.permit(:title, :book_img, :author, :stars, :category, :content)
  end

  def find_book
    @book = Book.find_by_id(params[:id])
  end
end