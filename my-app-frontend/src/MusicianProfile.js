import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function MusicianProfile() {

    const { id } = useParams()
    const [instruments, setInstruments] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/musicians/${id}`)
        .then((r) => r.json()).then((data) => {
            setInstruments(data.instruments)
        })
    }, [])

    const instrumentElements = instruments.map((i) => {
        return <li key={i.id}>
            <div>{i.name} - {i.brand} ({i.instrument_class})</div>
            <button onClick={handleRemove}>Remove</button>
        </li>
    })

    return (
        <div>
            <h2>*Musician*'s Instrument List</h2>
            <ol>
                {instrumentElements}
            </ol>
        </div>
    )
}
