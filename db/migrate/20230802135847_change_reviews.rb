class ChangeReviews < ActiveRecord::Migration[7.0]
  def change
    remove_column :reviews, :author_name, :string
    add_column :reviews, :title, :string
    add_column :reviews, :name, :string
  end
end
