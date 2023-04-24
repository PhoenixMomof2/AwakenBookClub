class Book < ApplicationRecord
  validates :title, uniqueness: true, presence: true
  validates :book_img, :author, :stars, :category, :content, presence: true
  
  has_many :comments
  has_many :users, -> { distinct }, through: :comments

  def self.books_by_author(n)
    self.all.select{ |book| book.author.length > n }
  end

end

