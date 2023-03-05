class Book < ApplicationRecord
  validates :title, :book_img, :author, :stars, :category, :content, presence: true
  
  # validates :title, uniqueness: { 
  #   scope: :users, 
  #   message: "can only have one copy of a book for comments." 
  # }

  has_many :comments
  has_many :users, through: :comments
end
