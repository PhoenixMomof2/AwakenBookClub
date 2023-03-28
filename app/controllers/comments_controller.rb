class CommentsController < ApplicationController
  before_action :authorize
  before_action :find_comment, only: [:show, :update, :destroy]

  # GET /comments 
  def index   
      render json: current_user.comments, status: :ok    
  end
  
  # GET /comments/:id
  def index
    render json: @comment, status: :ok    
  end
  
  # POST /comments
  def create  
    @comment = current_user.comments.create!(comment_params)
    render json: @comment, status: :created   
  end
  
  # PATCH /comments/:id
  def update      
      @comment.update!(comment_params)
      render json: @comment, status: :accepted      
  end

  # DELETE /comments/:id  
  def destroy    
      @comment.destroy
      head :no_content
  end

  private
  def comment_params
    params.permit(:comment, :book_id)
  end

  def find_comment
    @comment = current_user.comments.find_by_id(params[:id])
    if !@comment
      render json: { error: "Unauthorized" }
    end
  end
end
