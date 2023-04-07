class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

  # Login
  def create    
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: 201
    else
      render json: { errors: "Invalid Username or Password" }, status: 401
    end
  end

  # Logout
  def destroy
    session.delete :user_id
    head :no_content
  end
end