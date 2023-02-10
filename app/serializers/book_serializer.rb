class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :book_img, :author, :stars, :category, :content

  def short_content
    "#{self.content[0...300]...}"
  end
end
