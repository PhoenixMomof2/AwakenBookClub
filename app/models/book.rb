class Book < ApplicationRecord
  validates :title, uniqueness: true, presence: true
  validates :book_img, :author, :stars, :category, :content, presence: true
  
  has_many :comments
  has_many :users, -> { distinct }, through: :comments

  def self.books_by_author(n)
    self.all.select{ |book| book.author.length > n }
  end

=begin
Write a custom class method that goes through all the books and randomly 
assigns a value to the stars attribute between 1 and 5.
Then follow up by writing a custom instance method for a book 
that will return a string of stars that is a reflection of they value of the stars attribute.
=end

def self.random_stars
  self.all.map do |book|
    book.stars = rand(1..5)
  end
end

end