class Api::SessionsController < ApplicationController
    before_action :require_logged_out, only: :create
    before_action :require_logged_in, only: :destroy

    def show
        @user = current_user
        if @user   
          render 'api/users/show'
        else
          render json: { user: nil }
        end
    end
    
      def create
        @user = User.find_by_credentials(params[:email], params[:password])
    
        if @user
          login!(@user)
          render 'api/users/show'
        else
          render json: { errors: ['Oops! Your email or password was incorrect. Please try again.']}, status: :unauthorized
        end
      end
    
      def destroy
        logout!
        render json: { message: 'Successfully logged out!' }
      end
end
