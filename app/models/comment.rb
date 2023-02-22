class Comment < ApplicationRecord
  validates :comment, :user_id, :book_id, presence: true

  belongs_to :user
  belongs_to :book

  # Comment.pluck(:user_id, :comments) retrieves all comments
  # Comment.where(user_id: 1).pluck(:comments) returns an array of comments for user 1
  # Comment.find(1).all_users_comments(1)

  # def all_users_comments
  #   Comment.where(user_id: 1).pluck(:comments)
  # end
end
