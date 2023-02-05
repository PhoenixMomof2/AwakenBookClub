class Book < ApplicationRecord
  # validates :title, :book_img, :author, :stars, :category, :content, :user_id, :group_id, presence: true

  has_many :groups
  has_many :users, through: :groups
end
