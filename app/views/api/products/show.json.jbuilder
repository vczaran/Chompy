json.product do
    json.set! @product.id do
        json.extract! @product, :id, :name, :category, :price, :rating, :reviews, :details, :flavor_options, :size_options, :color_options, :created_at, :updated_at
        json.image_url @product.image.url
    end
end

@reviews.each do |review|
    json.extract! review, :id, :body, :author_id, :product_id, :author_name
end
