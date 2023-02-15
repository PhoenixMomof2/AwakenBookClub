class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :age
  has_many :book_groups
  has_many :books
end
