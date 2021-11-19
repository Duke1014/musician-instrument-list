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

  get '/musicians/:id' do
    musician = musician.find(params[:id])
    musician.to_json
  end

  get '/instruments' do
    instruments = Instrument.all
    instruments.to_json
  end

  post '/musicians' do
    musician = Musician.create(
      "name": params[:name]
    )
    musician.to_json
  end

  delete '/musicians/:id' do
    musician = Musician.find(params[:id])
    musician.destroy
  end

end
