class Api::SessionsController < ApplicationController
  before_action :ensure_logged_in, only: [:destroy]
  
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password])
    if @user
      log_in(@user)
      render :show
    else 
      render json: ["invalid email and password combination"], status: 400
    end
  end

  def destroy
    log_out
    render json: {}
  end

end