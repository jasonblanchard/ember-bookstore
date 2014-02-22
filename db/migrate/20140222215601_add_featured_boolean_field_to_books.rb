class AddFeaturedBooleanFieldToBooks < ActiveRecord::Migration
  def change
    add_column :books, :featured, :boolean, default: false
  end
end
