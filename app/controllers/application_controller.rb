class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
  # before_action :authorized
  

  private

  # def authorized
  #   @current_user = User.find_by(id: session[:user_id])
  #   render json: { error: "Not Authorized" }, status: :unauthorized unless @current_user
  # end

  # Error handling methods
  def render_not_found_response
    render json: { errors:  "Not found" }, status: :not_found
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end
