import React, { useState } from 'react'

export default function InstrumentForm({ error, setError }) {

    const [instrumentName, setInstrumentName] = useState("")
    const [instrumentClassName, setInstrumentClassName] = useState("")
    const [brandName, setBrandName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
        fetch("http://localhost:9292/instruments", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            // body: JSON.stringify({name: formName})
        }).then(r => r.json()).then((data) => {
            console.log(data)
            setError("Musician saved successfully!")
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
                        value={instrumentClassName}
                        onChange={e => setInstrumentClassName(e.target.value)}
                    />
                    <br></br>
                    Brand: <input
                        type="text"
                        name="brand"
                        value={brandName}
                        onChange={e => setBrandName(e.target.value)}
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
