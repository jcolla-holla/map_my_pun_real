Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: JSON} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :routes, only: [:post, :show, :update, :destroy, :index]
    resources :workouts, only: [:post, :show, :update, :destroy, :index]
  end

  root to: "static_pages#root"
end
