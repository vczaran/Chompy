json.product({})

json.product do
    json.set! @product.id do
        json.extract! @product, :id, :name, :category, :price, :rating, :reviews, :details, :flavor_options, :size_options, :color_options, :created_at, :updated_at
        json.image_url @product.image.url
    end
end

json.reviews({})

json.reviews do
    @reviews.each do |review|
        json.set! review.id do
            json.extract! review, :id, :body, :author_id, :product_id, :name, :title, :created_at
        end
    end
end
