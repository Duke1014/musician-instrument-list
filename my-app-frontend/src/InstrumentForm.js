import React, { useState } from 'react'

export default function InstrumentForm({ error, setError }) {

    const [instrumentName, setInstrumentName] = useState("")
    const [instrumentClass, setInstrumentClass] = useState("")
    const [brand, setBrand] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
        fetch("http://localhost:9292/instruments", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: instrumentName, instrument_class: instrumentClass, brand: brand})
        }).then(r => r.json()).then((data) => {
            console.log(data)
            setError(`${data.name} saved successfully!`)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Instrument Name: <input 
                        type="text"
                        name="name"
                        value={instrumentName}
                        onChange={e => setInstrumentName(e.target.value)}
                    />
                    <br></br>
                    Instrument Class: <input
                        type="text"
                        name="class"
                        value={instrumentClass}
                        onChange={e => setInstrumentClass(e.target.value)}
                    />
                    <> </>
                    [ex: String, Percussion, Brass, Woodwind]
                    <br></br>
                    Brand: <input
                        type="text"
                        name="brand"
                        value={brand}
                        onChange={e => setBrand(e.target.value)}
                    />
                    <br></br>
                    <input type="submit"></input>
                </label>
            </form>
            <div>
                {error}
            </div>   
        </div>
    )
}
