class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :body, null: false
      t.references :author, null: false, foreign_key: {to_table: :users} 
      t.string :author_name
      t.references :product, null: false, foreign_key: true

      t.timestamps
    end
  end
end
