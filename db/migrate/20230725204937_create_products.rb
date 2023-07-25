class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.string :category, null: false
      t.float :price, null: false
      t.float :rating, null: false
      t.string :details
      t.string :flavor_options
      t.string :size_options
      t.string :color_options

      t.timestamps
    end
  end
end
