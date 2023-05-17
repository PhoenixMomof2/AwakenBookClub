class User < ApplicationRecord
  validates :username, uniqueness: true, length: { in: 8..25 }
  validates :password, length: { in: 8..12 }
  validates :age, numericality: { greater_than_or_equal_to: 18 }
  validates :bio, presence: true

  has_many :comments, dependent: :destroy
  has_many :books, -> { distinct }, through: :comments
  
  #proc ->
  has_secure_password   
end
