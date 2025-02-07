import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import InstrumentForm from './InstrumentForm'

export default function Instruments() {

    const [instruments, setInstruments] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        fetch("http://localhost:9292/instruments")
        .then ((r) => r.json()).then((data) => {
            console.log(data)
            setInstruments(data)
        })
    }, [error])

    const handleDelete = (e) => {
        setError("")
        fetch(`http://localhost:9292/musicians/${e.target.id}`, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
            body: null
        }).then(() => setError("Delete successful"))
    }
    
    const instrumentElements = instruments.map((i) => {
        return <li key={i.id}>
            {i.name}
            <> </>
            <button onClick={handleDelete}>Delete</button>
        </li>
    })

    return (
        <div>
            <ul>
                {instrumentElements}
            </ul>
            <InstrumentForm error={error} setError={setError} />
            <Link to="/" className="back-button">Back</Link>
        </div>
    )
}