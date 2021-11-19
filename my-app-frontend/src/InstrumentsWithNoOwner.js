import React, { useState, useEffect} from 'react'

export default function InstrumentsWithNoOwner({ id, setError, error }) {
    
    const [instrumentList, setInstrumentList] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:9292/instruments`)
        .then((r) => r.json()).then((data) => {
            setInstrumentList(data.filter(d => 
                d.musician_id === null
            ))
        })
    }, [error])

    const addInstrumentToMusician = (e) => {
        setError("")
        fetch(`http://localhost:9292/instruments/${e.target.id}`, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({musician_id: id})
        }).then(r => r.json()).then(() => {
            setError("Instrument successfully added to musician!")
        })
    }
    
    const showInstruments = instrumentList.map((i) => {
        return <li key={i.id}>
            <div>{i.name} - {i.brand} ({i.instrument_class})</div>
            <button onClick={addInstrumentToMusician} id={i.id}>+</button>
        </li>
    })
    
    
    return (
        <div>
            <ul>
                {showInstruments}
            </ul>
        </div>
    )
}
