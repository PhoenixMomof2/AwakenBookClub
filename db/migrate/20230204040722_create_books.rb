class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :book_img
      t.string :author
      t.integer :stars
      t.string :category
      t.string :content

      t.timestamps
    end
  end
end
