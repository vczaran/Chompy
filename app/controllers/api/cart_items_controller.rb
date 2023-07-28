class Api::CartItemsController < ApplicationController

    def create
        @cart = CartItem.find_by(user_id: params[:user_id]) || CartItem.new(cart_params)
        @cart.quantity ||= 0

        if @cart.save
            render 'api/cartitems/show'
        else
            status: 422
        end
    end

    def show
        @cartitems = CartItem.all
        render 'api/cartitems/show'
    end

    def update
        @cart = Cart.find_by(user_id: params[:user_id])
        @cart.quantity = params[:quantity].to_i
        render 'api/cartitems/show'
    end

    def destroy
        @user = params[:user_id]
        @cart_items = @user.cart_items
        @cart_items.destroy_all
    end

    private

    def cart_params
        params.require(:cart).permit(:user_id, :product_id, :quantity)
    end

end
