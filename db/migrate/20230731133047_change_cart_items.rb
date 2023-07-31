class ChangeCartItems < ActiveRecord::Migration[7.0]
  def change
    add_column :cart_items, :size, :string
    add_column :cart_items, :flavor, :string
    add_column :cart_items, :color, :string
  end
end
