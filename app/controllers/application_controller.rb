class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get '/' do
    "Hello World"
  end

  get '/musicians' do
    musicians = Musician.all
    musicians.to_json
  end

  get '/instruments' do
    instruments = Instrument.all
    instruments.to_json
  end

end
