class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :book_img, :author, :stars, :category, :content, :short_content, :created_at
  
  def short_content
    "#{self.object.content[0...200]...}"
  end

  has_many :comments
  has_many :users
end
