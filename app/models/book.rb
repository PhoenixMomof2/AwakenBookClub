class Book < ApplicationRecord
  validates :title, :book_img, :author, :stars, :category, :content, presence: true

  has_many :comments
  has_many :users, through: :comments
end

