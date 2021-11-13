class CreateInstruments < ActiveRecord::Migration[6.1]
  def change
    create_table :instruments do |t|
      t.string :name
      t.string :instrument_class
      t.string :brand
      t.integer :musician_id
    end 
  end
end
