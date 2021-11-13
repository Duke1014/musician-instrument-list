require 'pry'

class Instrument < ActiveRecord::Base
    belongs_to :musician
end
