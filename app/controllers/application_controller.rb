class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  helper_method :logged_in?, :current_user

  def ensure_logged_in
    render json: ["you are not logged in"], status: 404 unless logged_in?
  end

  def current_user
    User.find_by(session_token: session[:session_token])
  end

  def log_in(user)
    session[:session_token] = user.session_token
  end

  def logged_in?
    !!current_user
  end

  def log_out
    current_user.reset_session_token!
    session[:session_token] = nil
  end
end
