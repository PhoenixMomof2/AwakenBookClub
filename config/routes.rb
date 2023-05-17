Rails.application.routes.draw do
  get "/commented_books/:count", to: "books#commented_books"
  get "/books_by_category/:category", to: "books#books_by_category"
  get "/books_by_author/:n", to: "books#books_by_author"
  get "/users_by_age/:n", to: "users#users_by_age"
  get "/random_star/:n", to: "books#random_star"
  get "/stars", to: "books#stars"
  
  resources :books, except: [:update, :destroy]
  resources :users, only: :create

  # Sessions
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Users
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
 
  
  # Nested User Comments Routes
  resources :users, only: :show do 
    resources :comments
  end
 

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

# ROUTING PARAMETERS
# The params hash will always contain the :controller and :action keys, but you should use the methods 
# controller_name and action_name instead to access these values. Any other parameters defined by the routing, 
# such as :id, will also be available. As an example, consider a listing of clients where the list can show 
# either active or inactive clients. We can add a route that captures the :status parameter in a "pretty" URL:

# get '/clients/:status', to: 'clients#index', foo: 'bar'

# In this case, when a user opens the URL /clients/active, params[:status] will be set to "active". 
#   When this route is used, params[:foo] will also be set to "bar", as if it were passed in the query string. 
#   Your controller will also receive params[:action] as "index" and params[:controller] as "clients".