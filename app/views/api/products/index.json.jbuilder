
@products.each do |product|
    json.set! product.id do
        json.id product.id
        json.name product.name
        json.category product.category
        json.price product.price
        json.imageUrl product.image.attached? ? product.image.url : nil
        json.rating product.rating
        json.extract! product, :id, :name, :category, :price, :rating
    end
end


# json.products do
#     @products.each do |product|
#         json.set! product.id do
#             json.extract! product, :id, :name, :category, :price, :rating
#         end
#     end
# end