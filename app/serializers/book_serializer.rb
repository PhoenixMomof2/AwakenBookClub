class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :book_img, :author, :stars, :category, :content, :short_content, :comments, :user_comments
  
  def user_comments
    object.comments.map do |comment|
      { 
        id: comment.id,
        comment: comment.comment,
        username: comment.user.username,
        updated_at: comment.updated_at.strftime("%A, %B %d, %Y at %I:%M %p")
      }
    end
  end

  def short_content
    "#{self.object.content[0...250]...}"
  end

  has_many :users
end
