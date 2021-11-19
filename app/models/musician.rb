require 'pry'

class Musician < ActiveRecord::Base
    has_many :instruments
    
end
