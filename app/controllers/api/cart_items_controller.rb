class Api::CartItemsController < ApplicationController
    # before_action :require_logged_in

    def create
        @cart_item = CartItem.new(cart_params)
        @user = current_user

        if @cart_item.save
            render 'api/cart_items/index'
        else
            status: 422
        end
    end

    def index
        @cart_items = current_user.cart_items
        render 'api/cart_items/index'
    end

    def update
        @cart_item = CartItem.find_by(user_id: params[:user_id])
        @cart.quantity = params[:quantity].to_i
        render 'api/cart_items/index'
    end

    def destroy
        @cart_item = CartItem.find(params[:id])
        @cart_item.delete
    end

    private

    def cart_params
        params.require(:cart_item).permit(:user_id, :product_id, :quantity)
    end

end
