class AddPricetoCartItem < ActiveRecord::Migration[7.0]
  def change
    add_column :cart_items, :price, :float
  end
end
