class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      render :show
    else
      # TODO: we are not really sure about this
      render json: @user.errors.full_messages, status: 400
    end
  end

  def index 
    @users = User.all
    render :index
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :gender, :country, :birthday, :subscribed)
  end
end