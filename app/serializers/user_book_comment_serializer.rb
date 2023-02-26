class UserBookCommentSerializer < ActiveModel::Serializer
  attributes :id, :username, :age

  has_many :comments
  has_many :books
end
