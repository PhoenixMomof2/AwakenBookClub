class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  private

  def authorize
    @user = User.find_by(id: session[:user_id])
    render json: { error: "Not Authorized" }, status: :unauthorized unless @user
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end
end
