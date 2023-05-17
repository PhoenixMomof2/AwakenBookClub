class CommentsController < ApplicationController
  before_action :find_comment, only: [:show, :update, :destroy]

  # GET /users/:user_id/comments 
  def index          
    render json: current_user.comments, status: :ok
  end
  
  # GET /users/:user_id/comments/:id
  def show
    render json: @comment, status: :ok    
  end
  
  # POST /users/:user_id/comments
  def create  
    @comment = current_user.comments.create!(comment_params)
    render json: @comment, include: ['book.user_comments', 'book.users'], status: :created   
  end
  
  # PATCH /users/:user_id/comments/:id 
  def update      
    @comment.update!(comment_params)
    render json: @comment, include: ['book.user_comments'], status: :accepted      
  end

  # DELETE /users/:user_id/comments/:id  
  def destroy    
    @comment.destroy
    head :no_content
  end

  private
  def comment_params
    params.permit(:comment, :book_id, :user_id)
  end

  def find_comment
    @comment = current_user.comments.find_by_id(params[:id])
    if !@comment
      render json: { error: "Unauthorized" }
    end
  end
end
