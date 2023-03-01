class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :book_id, :format_created_at_date, :format_updated_at_date, :user_comment_info

  # belongs_to :book
  # belongs_to :user

  def format_created_at_date
    "#{self.object.created_at.strftime("%A, %B %d, %Y at %I:%M %p")}"
  end

  def format_updated_at_date
    "#{self.object.updated_at.strftime("%A, %B %d, %Y at  %I:%M %p")}"
  end

  def user_comment_book_id
    Comment.joins(:user, :book).pluck("comments.book_id, users.username, books.title")
  end
end
