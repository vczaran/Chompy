class Api::UsersController < ApplicationController
  before_action :require_logged_out, only: :create
  wrap_parameters include: User.attribute_names + ['password']

  def create
    @user = User.new(user_params)

    if @user.save
        login(@user)
        render 'api/users/show'
    else
        render json: { errors: @user.errors.full_messages}, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render 'api/users/show'
  end

  def checkout
    @user = User.find(params[:id])
    @user.cart_items.destroy_all
  end



end
