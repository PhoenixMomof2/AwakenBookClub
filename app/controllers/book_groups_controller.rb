class BookGroupsController < ApplicationController
  # skip_before_action :authorized, only: [:index, :show]
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
<<<<<<< HEAD
    @book_group = find_book_group
    render json: @book_group, status: :ok
  end

  # POST /book_groups
  def create
    book_group = BookGroup.create!(book_group_params)
    render json: book_group, status: :created
  end

  # PATCH /book_groups/:id
  def update
    @book_group = find_book_group
    @book_group.update!(book_group_params)
    render json: @book_group, status: :ok
  end
=======
    book_group = find_book_group
    # user = User.find(id: session[:user_id])
    render json: book_group, status: :ok
    # render json: @book_group.current_user, status: :ok
  end

  # POST /book_groups
  # def create
  #   book_group = current_user.book_group.create!(book_groups_params)
  #   render json: book_group, status: :created
  # end

  # PATCH /book_groups/:id
  # def update
  #   @book_group.update!(book_groups_params)
  #   render json: @book_group, status: :ok
  # end
>>>>>>> 949f89fbce1e74c3b4ede59f3fbb6f1090b53f10

  # DELETE /book_groups/:id
  # def destroy
  #   @book_group.destroy
  #   head :no_content
  # end

  private
  def book_group_params
    params.permit(:comments, :user_id, :book_id)
  end

  def find_book_group
<<<<<<< HEAD
    @book_group = BookGroup.find(params[:id])
=======
    BookGroup.find(params[:id])
>>>>>>> 949f89fbce1e74c3b4ede59f3fbb6f1090b53f10
  end
end
