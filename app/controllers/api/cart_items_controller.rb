class Api::CartItemsController < ApplicationController
    before_action :require_logged_in

    def create
        # @cart_item = CartItem.find_by(user_id: current_user.id, product_id: cart_params[:product_id])
        @cart_item = CartItem.new(cart_params)
        @user = current_user
     
        if @cart_item.save
            # render 'api/users/show'
            render 'api/cart_items/show'
        else
            render json: {errors: ""}, status: 422
        end
     
    end

    def update
        @cart_item = CartItem.find_by(user_id: params[:user_id], product_id: cart_params[:product_id])
        id = @cart_item.id
        new_quantity = params[:quantity].to_i
        @cart_item.update!(id, :quantity => new_quantity)
    end

    def destroy
        @cart_item = CartItem.find(params[:id])
        @cart_item.delete
    end

    private

    def cart_params
        params.permit(:user_id, :product_id, :quantity, :color, :size, :flavor)
    end

end
