Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # namespace :api, defaults: {format: JSON} do
  #   resources :users, only: [:create]
  #   resources :session, only: [:create, :destroy]
  # end

  root to: "static_pages#root"
end
