Rails.application.routes.draw do
  root 'page#index'
  
  #get 'episodes', to: 'pages#episodes'

  get "page/episodes"
end