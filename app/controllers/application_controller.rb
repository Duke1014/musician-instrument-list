class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get '/musicians' do
    musicians = Musician.all
    musicians.to_json
  end

end
