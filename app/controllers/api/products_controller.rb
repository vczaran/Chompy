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

    def search
        query = params[:query]
        @products = Product.where('name ILIKE ? OR category ILIKE ?', "%#{query}%", "%#{query}%")
        render :search
    end

end
