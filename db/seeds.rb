puts "🌱 Seeding spices..."

Musician.create(name: "Duke")
Musician.create(name: "Mo")

Instrument.create(name: "Bodhran", instrument_class: "Percussion", brand: "REMO", musician_id: 1)
Instrument.create(name: "Guitar", instrument_class: "String", brand: "Takamine", musician_id: 2)

puts "✅ Done seeding!"
