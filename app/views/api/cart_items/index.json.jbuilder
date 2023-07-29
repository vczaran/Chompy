
# @cart_items.each do |item|
#     json.set! item.id do
#         json.extract! item, :id, :quantity, :user_id, :product_id
#     end
    
#     product = item.product

#     json.product do
#         json.extract! product, :name, :price
#     end
# end

json.cart do
    json.set! @cart_item.id do
    json.extract! @cart_item, :id, :quantity, :user_id, :product_id
    end
end