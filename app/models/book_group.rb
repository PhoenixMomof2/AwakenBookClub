class BookGroup < ApplicationRecord
  validates :comments, :user_id, :book_id, presence: true

  belongs_to :user
  belongs_to :book

  #BookGroup.pluck(:user_id, :comments) retrieves all comments
  #BookGroup.where(user_id: 1).pluck(:comments) returns an array of comments for user 1
  #BookGroup.find(1).all_users_comments(1)

  # def all_users_comments
  #   BookGroup.where(user_id: 1).pluck(:comments)
  # end
end
