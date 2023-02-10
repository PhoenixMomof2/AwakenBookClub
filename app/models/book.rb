class Book < ApplicationRecord
  validates :title, :book_img, :author, :stars, :category, :content, presence: true

  has_many :book_groups
  has_many :users, through: :book_groups
end
