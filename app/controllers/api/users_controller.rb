class Api::UsersController < ApplicationController
  before_action :require_logged_out, only: :create
  wrap_parameters include: User.attribute_names + ['password']

  def create
    @user = User.new(user_params)
    debugger
    if @user.save
        login(@user)
        # render :show
        render json: { message: "Successfully signed up!"}
    else
        render json: { errors: @user.errors.full_messages, status: :unprocessable_entity }
    end
  end

  def show
    @user = User.find(params[:id])
    # render :show
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

end
