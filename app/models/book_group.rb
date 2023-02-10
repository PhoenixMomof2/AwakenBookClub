class BookGroup < ApplicationRecord
  validates :name, :comments, :user_id, :book_id, presence: true

  belongs_to :user
  belongs_to :book
end
