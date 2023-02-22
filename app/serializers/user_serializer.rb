class UserSerializer < ActiveModel::Serializer
  attributes :username, :age, :bio

  has_many :books
  has_many :comments
end
