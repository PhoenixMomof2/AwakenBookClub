class BookGroupSerializer < ActiveModel::Serializer
  attributes :id, :comments, :user_id, :book_id, :created_at, :updated_at
end
