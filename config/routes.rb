Rails.application.routes.draw do
  resources :cart_costumes
  resources :costumes
  resources :favorites
  resources :customers
  resources :carts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
