class UserSerializer < ActiveModel::Serializer
  attributes :username, :age
  # has_many :books
  has_many :book_groups, serializer: UserBookGroupSerializer
end
