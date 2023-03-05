class CommentsController < ApplicationController
  skip_before_action :authorize, only: [:index, :show]
  before_action :find_comment, only: [:update, :destroy]

  # GET /comments or /users/:user_id/comments 
  # conditional rendering using the params :user_id
  def index
    if params[:user_id]
      @user = User.find_by_id(params[:user_id])
      render json: @user.comments, status: :ok
    else
      render json: Comment.all, status: :ok
    end
  end
  
  # GET /comments/:id
  def show
    @comment = find_comment
    render json: @comment, status: :ok
  end

  # POST /users/:user_id/comments
  def create  
    # @comment = current_user.comments.create!(comment_params)
    # render json: @comment, include: :book_id, status: :created
    if params[:user_id]
      @user = User.find_by_id(params[:user_id])
      @comment = @user.comments.create!(comment_params)
      render json: @comment, status: :created  
    else
      render json: { message: "Not authorized!" }, status: :unauthorized
    end
  end

  # PATCH /users/:user_id/comments/:id
  def update
    if @comment.user_id == current_user.id
      find_comment
      @comment = current_user.comment.update!(comment_params)
      render json: @comment, status: :updated  
    else
      render json: Comment.all, status: :unauthorized
    end
  end

  # DELETE /users/:user_id/comments/:id
  def destroy
    if @comment.user_id == current_user.id
      find_comment
      @comment = current_user.comment.destroy
      head :no_content
    else
      render json: { message: "You've been had!" }
    end
  end

  private
  def comment_params
    params.permit(:comment, :user_id, :book_id)
  end

  def find_comment
    @comment = Comment.find_by_id(params[:id])
  end
end
