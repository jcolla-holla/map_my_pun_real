Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: JSON} do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :routes, only: [:create, :show, :update, :destroy, :index]
    resources :workouts, only: [:create, :show, :update, :destroy, :index]
    resources :friendships, only: [:create, :show, :update, :destroy, :index]
    resources :likes, only: [:create, :show, :update, :destroy, :index]
    resources :comments, only: [:create, :show, :update, :destroy, :index]
  end

  root to: "static_pages#root"
end
