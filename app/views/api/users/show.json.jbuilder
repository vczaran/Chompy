json.user do
    json.extract! @user, :id, :email, :name, :errors, :created_at, :updated_at
end