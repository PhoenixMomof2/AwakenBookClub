class SessionsController < ApplicationController
  skip_before_action :authorized, only: :create

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
    flash[:notice] = "You have successfully logged out."
    head :no_content
  end
end

# FLASH METHOD 
# The flash is a special part of the session which is cleared with each request. 
# This means that values stored there will only be available in the next request, 
# which is useful for passing error messages, etc.

# The flash is accessed via the flash method. Like the session, the flash is represented as a hash.