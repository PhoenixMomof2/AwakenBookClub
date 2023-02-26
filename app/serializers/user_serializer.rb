class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :age, :bio

  has_many :books
  has_many :comments
end
