class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :book_id, :name, :updated_at, :created_at

  def name   
    object.user.username
  end

  def updated_at
     object.updated_at.strftime("%A, %B %d, %Y at %I:%M %p")
  end

  def created_at
    object.created_at.strftime("%A, %B %d, %Y at %I:%M %p")
  end

  belongs_to :user
end
