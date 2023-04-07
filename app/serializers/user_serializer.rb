class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio

  has_many :books, serializer: BookSerializer
end