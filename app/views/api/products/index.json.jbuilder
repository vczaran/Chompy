json.products do
    json.extract! @products, :id, :name, :category, :price, :rating, :created_at, :updated_at
end