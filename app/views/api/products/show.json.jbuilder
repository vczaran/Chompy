json.product do
    json.set! @product.id do
        json.extract! @product, :id, :name, :category, :price, :rating, :details, :flavor_options, :size_options, :color_options, :created_at, :updated_at
        json.image_url @product.image.url
    end
end