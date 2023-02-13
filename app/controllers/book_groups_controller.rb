class BookGroupsController < ApplicationController

  def index
    render json: BookGroup.all
  end
  
  def show

  end

  def create

  end

  def update

  end

  def destroy
    
  end

  private
  def book_groups_params
    params.permit(:name, :comments, :user_id, :book_id)
  end
end
