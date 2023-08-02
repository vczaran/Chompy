class Api::ProductsController < ApplicationController

    def index
        @products = Product.all
        render 'api/products/index'
    end


    def show
        @product = Product.find(params[:id])
        @reviews = Review.where(product_id: @product.id)
        render 'api/products/show'
    end

end
