class CommentsController < ApplicationController
  skip_before_action :authorized, only: [:index, :show]
    
  # GET /comments
  def index
    render json: Comment.all, status: :ok
  end
  
  # GET /comments/:id
  def show
    @comment = find_comment
    render json: @comment, status: :ok
  end

  # POST /comments
  def create
    @comment = current_user.comments.create!(comment_params)
    render json: @comment, status: :created
  end

  # PATCH /comments/:id
  def update
    @comment = current_user.comment.update!(comment_params)
    render json: @comment, status: :ok
  end

  # DELETE /comments/:id
  def destroy
    @comment = current_user.comment.destroy
    head :no_content
  end

  private
  def comment_params
    params.permit(:comment, :user_id, :book_id)
  end

  def find_comment
    @comment = Comment.find(params[:id])
  end
end
