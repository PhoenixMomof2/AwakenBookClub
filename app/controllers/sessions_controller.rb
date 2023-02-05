class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

  # Login
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end

  # Logout
  def destroy
    session.delete :user_id
    head :no_content
    #session.clear (maybe use instead)
  end

end
