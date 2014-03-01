class CreateBooksAuthorsTable < ActiveRecord::Migration
  def change
    create_table :books_authors do |t|
      t.references :books
      t.references :authors
    end
    add_index :books_authors, :books_id
    add_index :books_authors, :authors_id
  end
end
