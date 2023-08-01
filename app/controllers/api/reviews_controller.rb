class Api::ReviewsController < ApplicationController
    # before_action :require_logged_in

    def create
        @review = Review.new(review_params)
        # @review.author_id = current_user.id

        if @review.save
            render 'api/reviews/show'
        end

    end

    def update
        @review = Review.find(params[:id])

        if current_user.id == @review.author_id
            # update
        end

    end

    def destroy
        @review = Review.find(params[:id])

        if current_user.id == @review.author_id
            # delete
        end
        
    end

    private

    def review_params
        params.permit(:author_id, :product_id, :author_name, :body)
    end
end
