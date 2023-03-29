Rails.application.routes.draw do
  resources :comments, only: :index
  resources :books, except: [:create, :update, :destroy]
  resources :users, except: [:update, :destroy]

   # Sessions
   post "/login", to: "sessions#create"
   delete "/logout", to: "sessions#destroy"

  # Users
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
    
  # Custom User Routes
  resources :users, only: [:index , :show] do 
    resources :books 
    resources :comments
  end
 
  get "/comments_by_category", to: "books#comments_by_category"

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