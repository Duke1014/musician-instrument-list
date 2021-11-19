class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # GET
  get '/' do
    "Hello World"
  end

  get '/musicians' do
    musicians = Musician.all
    musicians.to_json
  end

  get '/musicians/:id' do
    musician = Musician.find(params[:id])
    musician.to_json(include: :instruments)
  end

  get '/instruments' do
    instruments = Instrument.all
    instruments.to_json
  end

  get '/instruments/:id' do
    instrument = Instrument.find(params[:id])
    instrument.to_json
  end

  # POST
  post '/musicians' do
    musician = Musician.create(
      "name": params[:name]
    )
    musician.to_json
  end

  post '/instruments' do
    instrument = Instrument.create(
      "name": params[:name],
      "instrument_class": params[:instrument_class],
      "brand": params[:brand]
    )
    instrument.to_json
  end

  # PATCH

  # DELETE
  delete '/musicians/:id' do
    musician = Musician.find(params[:id])
    musician.destroy
  end

  delete '/instruments/:id' do
    instrument = Instrument.find(params[:id])
    instrument.destroy
  end

end
