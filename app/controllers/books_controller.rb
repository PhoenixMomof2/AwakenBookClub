class BooksController < ApplicationController
  skip_before_action :authorize, only: [:index, :show, :books_by_category, :random_star, :stars, :book_comments_length]

  def example
    range = (1..5)
    num = params[:n].to_i.to_f
    if range.include?(num)
      books = Book.where("stars >= ?", num)
      render json: books
    else
      render json: { error: "please give appropriate num" }
    end
  end 

#books that have at lease :n of comments or more   
def book_comments_length
  num =  params[:n].to_i
  books = Book.all.select{|book| book.comments.length >= num }  
  render json: books
  # { message: "There are no books with #{} comments."}
end

=begin
Write a custom class method that goes through all the books and randomly 
assigns a value to the stars attribute between 1 and 5.
Then follow up by writing a custom instance method for a book 
that will return a string of stars that is a reflection of they value of the stars attribute.
=end

  # GET /random_star/:n (dynamic)
  def random_star  
    book = Book.find_by(id: params[:n])
    star = '⭐'
    num = rand(1..5)
    str = ''
    stars = book.stars.to_i 
    num.times do
      str += star
    end
    render json: { message: "#{book.title} now has #{str} stars." }
  end

  # goes through all the books
  def stars  
    starred_books = Book.all.select{|book| 
      star = '⭐'
      num = rand(1..5)
      str = ''
      stars = book.stars.to_i  
      num.times do
        str += star
      end
      puts str
    }
    render json: starred_books
  end

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
      # byebug
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
    render json: @book, include: ['users', 'user_comments'], status: :created
  end 

  private
  def book_params
    params.permit(:title, :book_img, :author, :stars, :category, :content)
  end

  def find_book
    @book = Book.find_by_id(params[:id])
  end
end