json.extract! cart_item, :id, :quantity, :user_id, :product_id

product = cart_item.product

json.product do
    json.extract! product, :name, :price
end