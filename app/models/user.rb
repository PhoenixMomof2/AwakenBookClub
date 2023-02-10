class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :age, presence: true, numericality: { greater_than_or_equal_to: 18 }

  has_many :book_groups
  has_many :books, through: :book_groups

  has_secure_password
end
