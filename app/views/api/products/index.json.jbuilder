
# @products.each do |product|
#     json.set! product.id do
#         json.id product.id
#         json.name product.name
#         json.category product.category
#         json.price product.price
#         json.imageUrl product.image.attached? ? product.image.url : nil
#         json.rating product.rating
#         json.details product.details
#         json.flavor_options product.flavor_options
#         json.size_options product.size_options
#         json.color_options product.color_options
#         json.extract! product, :id, :name, :category, :price, :rating, :details, :flavor_options, :size_options, :color_options

#     end
# end


json.products do
    @products.each do |product|
        json.set! product.id do
            json.extract! product, :id, :name, :category, :price, :rating, :details, :flavor_options, :size_options, :color_options, :created_at, :updated_at
            json.imageUrl product.image.attached? ? product.image.url : nil
        end
    end
end