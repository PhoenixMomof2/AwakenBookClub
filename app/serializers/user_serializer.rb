class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :age, :bio

  has_many :books, serializer: BookSerializer
  has_many :comments, serializer: CommentSerializer
end
