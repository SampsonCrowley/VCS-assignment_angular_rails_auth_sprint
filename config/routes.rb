Rails.application.routes.draw do

  scope :api do
    scope :v1 do
      devise_for :users
    end
  end
  root to: "static_pages#index"
end
