Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resources :restaurants, only: [:index, :show]
    resources :tables, only: [:index, :show]
    resource :session, only: [:create, :destroy]
  end
end
