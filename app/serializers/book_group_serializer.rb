class BookGroupSerializer < ActiveModel::Serializer
  attributes :id, :name, :comments, :user_id, :book_id
end
