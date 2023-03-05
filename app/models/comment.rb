class Comment < ApplicationRecord
  validates :comment, presence: true
  # validates :book_id, uniqueness: true  
  
  validates :book_id, uniqueness: { 
    scope: :user_id, 
    message: "can only have one copy of a book for comments." 
  }

  belongs_to :user
  belongs_to :book
end
