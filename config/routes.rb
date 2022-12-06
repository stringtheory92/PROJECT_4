Rails.application.routes.draw do
  resources :cart_costumes
  resources :costumes
  resources :favorites
  resources :customers, only: [:index, :create, :destroy, :update]
  resources :carts
  get '/first_customer', to: 'customers#first'
  get '/me', to: 'customers#show'
  post '/signup', to: 'customers#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
