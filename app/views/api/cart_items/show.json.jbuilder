json.cart({})

json.cart do
    json.extract! @cart_item, :id, :quantity, :user_id, :product_id, :color, :size, :flavor
end