class BookGroupsController < ApplicationController
  skip_before_action :authorized, only: [:index, :show]
  # etag { current_user&.id }
  # Allows you to consider additional controller-wide information when generating an ETag. 
  # For example, if you serve pages tailored depending on who's logged in at the moment,
  # you may want to add the current user id to be part of the ETag to prevent unauthorized displaying of cached pages.

  # GET /book_groups
  def index
    render json: BookGroup.all, status: :ok
  end
  
  # GET /book_groups/:id
  def show
    book_group = find_book_group
    render json: book_group, status: :ok
  end

  # POST /book_groups
  def create
    book_group = BookGroup.create!(book_groups_params)
    render json: book_group, status: :created
  end

  # PATCH /book_groups/:id
  def update
    book_group = find_book_group
    book_group.update!(book_groups_params)
    render json: book_group, status: :ok
  end

  # DELETE /book_groups/:id
  def destroy
    book_group = find_book_group
    book_group.destroy
    head :no_content
  end

  private
  def book_groups_params
    params.permit(:comments, :user_id, :book_id)
  end

  def find_book_group
    BookGroup.find(id: params[:id])
  end
end
