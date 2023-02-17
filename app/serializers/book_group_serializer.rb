class BookGroupSerializer < ActiveModel::Serializer
  attributes :id, :comments, :user_id, :book_id, :created_at, :updated_at
  
  # def comments
  #   BookGroup.where(user_id: 1).pluck(:comments)
  # end
end
