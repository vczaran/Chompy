json.user({})

json.user do
    json.extract! @user, :id, :email, :name, :errors, :created_at, :updated_at
end

json.cart ({})

json.cart do
    @user.cart_items.each do |item|
        json.set! item.id do
            json.extract! item, :id, :quantity, :user_id, :product_id, :size, :color, :flavor
        end
    end
end