Rails.application.routes.draw do
  Rails.application.routes.draw do
    # mount ActionCable.server => '/cable'
    root to: 'rooms#show'
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
