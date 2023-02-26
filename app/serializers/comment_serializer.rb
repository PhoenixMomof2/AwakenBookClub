class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :book_id, :created_at, :updated_at
end
