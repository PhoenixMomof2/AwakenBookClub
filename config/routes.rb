Rails.application.routes.draw do
  resources :book_groups
  resources :books, except: [:update, :destroy]

  # Custom book routes
  
  # Users
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  get "/users", to: "users#index"
  # Sessions
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
