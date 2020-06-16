Rails.application.routes.draw do
  
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :artworks, only: [:index, :show, :update, :create]
      resources :users
      resources :hospitals, only: [:index, :show, :create]
    end
  end

  namespace :admin do
    resources :artworks, only: [:index, :show,:update, :destroy]
    resources :users, only: [:index, :show, :update, :destroy]
  end

  root 'homes#index'
  get '*path', to: 'homes#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
