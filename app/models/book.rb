class Book < ApplicationRecord
  validates :title, uniqueness: true, presence: true
  validates :book_img, :author, :stars, :category, :content, presence: true
  
  has_many :comments
  has_many :users, -> { distinct }, through: :comments
end

