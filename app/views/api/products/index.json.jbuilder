
@products.each do |product|
    json.imageUrl product.image.attached? ? product.image.url : nil
    json.set! product.id do
        json.id product.id
        json.name product.name
        json.category product.category
        json.price product.price
        json.rating product.rating
        json.extract! product, :id, :name, :category, :price, :rating
    end
end