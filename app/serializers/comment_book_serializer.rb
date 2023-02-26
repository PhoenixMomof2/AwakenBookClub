class CommentBookSerializer < ActiveModel::Serializer
  attributes :id, :comment
  
  belongs_to :book
end
