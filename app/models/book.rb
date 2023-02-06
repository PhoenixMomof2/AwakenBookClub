class Book < ApplicationRecord
  validates :title, :book_img, :author, :stars, :category, :content, presence: true

  has_many :groups
  has_many :users, through: :groups
end
