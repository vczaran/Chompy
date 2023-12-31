class ApplicationController < ActionController::API
    before_action :snake_case_params, :attach_authenticity_token
    include ActionController::RequestForgeryProtection

    protect_from_forgery with: :exception 
    rescue_from ActionController::InvalidAuthenticityToken, with: :invalid_authenticity_token

    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
      end
    

    def logged_in?
        !!current_user
    end


    def login(user)
        session[:session_token] = user.reset_session_token
        @current_user = user
    end
    
    
    def logout
        current_user.reset_session_token
        session[:session_token] = nil
        @current_user = nil
    end

    def require_logged_in
        unless logged_in?
          render json: { message: 'Must be logged in' }, status: :unauthorized 
        end
      end
    
    def require_logged_out
        if logged_in?
          render json: { message: 'Must be logged out'}, status: 403
        end
     end

      private

    def snake_case_params
        params.deep_transform_keys!(&:underscore)
    end

    def attach_authenticity_token
        headers['X-CSRF-Token'] = masked_authenticity_token(session)
    end

    def invalid_authenticity_token
        render json: { message: 'Invalid authenticity token' }, status: :unprocessable_entity
    end

    def user_params
      params.require(:user).permit(:name, :email, :password)
    end
    

end
