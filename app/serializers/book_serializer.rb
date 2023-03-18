class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :book_img, :author, :stars, :category, :content, :short_content, :comments
  
  def short_content
    "#{self.object.content[0...250]...}"
  end

  has_many :users
end
