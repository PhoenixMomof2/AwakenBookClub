class User < ApplicationRecord
  validates :username, uniqueness: true, length: { in: 8..25 }
  validates :password, length: { in: 8..12 }
  validates :age, numericality: { greater_than_or_equal_to: 18 }

  has_many :book_groups
  has_many :books, through: :book_groups

  has_secure_password
end
