class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :book_img, :author, :stars, :category, :content, :short_content

  has_many :book_groups
  has_many :users

  def short_content
    "#{self.object.content[0...200]...}"
  end
end
