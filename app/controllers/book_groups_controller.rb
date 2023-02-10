class BookGroupsController < ApplicationController

  def index
    render json: BookGroup.all
  end
end
