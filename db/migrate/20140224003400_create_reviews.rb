class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.text :body
      t.references :book, index: true

      t.timestamps
    end
  end
end
