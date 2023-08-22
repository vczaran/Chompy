json.products({})

json.products do
    @products.each do |product|
        json.set! product.id do
            json.extract! product, :id, :name, :category, :price, :rating, :details, :flavor_options, :size_options, :color_options
            json.imageUrl product.image.attached? ? product.image.url : nil
        end
    end
end