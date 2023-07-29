# json.extract! cart_item, :id, :quantity, :user_id, :product_id

# product = cart_item.product

# json.product do
#     json.extract! product, :name, :price
# end

@cart_items.each do |item|
    json.set! item.id do
        json.extract! item, :id, :quantity, :user_id, :product_id
    end
end