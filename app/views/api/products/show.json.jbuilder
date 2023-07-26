json.product do
    json.extract! @product, :id, :name, :category, :price, :rating, :details, :flavor_options, :size_options, :color_options, :created_at, :updated_at
end

json.image_url @post.image.url