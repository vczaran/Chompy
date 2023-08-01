class Api::CartItemsController < ApplicationController
    before_action :require_logged_in

    def create
        @cart_item = CartItem.new(cart_params)
        @user = current_user
     
        if @cart_item.save
            render 'api/cart_items/show'
        else
            render json: {errors: ""}, status: 422
        end
     
    end

    def update
        @cart_item = CartItem.find(params[:id])
        id = @cart_item.id
        new_quantity = params[:_json].to_i
        @cart_item.update!(:quantity => new_quantity)
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
