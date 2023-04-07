class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :book_img, :author, :stars, :category, :content, :short_content, :user_comments
  
  def user_comments    
    object.comments.map do |comment|
      { 
        id: comment.id,
        comment: comment.comment,    
        name: comment.user.username,
        book_id: comment.book_id,
        updated_at: comment.updated_at.strftime("%A, %B %d, %Y at %I:%M %p"),
        created_at: comment.created_at.strftime("%A, %B %d, %Y at %I:%M %p")
      }
    end
  end

  def short_content
    "#{self.object.content[0...250]...}"
  end

  has_many :users
end
