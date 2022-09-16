import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import InstrumentsWithNoOwner from './InstrumentsWithNoOwner'

export default function MusicianProfile() {

    const { id } = useParams()

    const [musicianInstruments, setMusicianInstruments] = useState([])
    const [musicianName, setMusicianName] = useState("")
    const [error, setError] = useState("")
    
    useEffect(() => {
        fetch(`http://localhost:9292/musicians/${id}`)
        .then((r) => r.json()).then((data) => {
            setMusicianInstruments(data.instruments)
            setMusicianName(data.name)
        })
    }, [])

    const handleRemove = (e) => {
        setError("")
        fetch(`http://localhost:9292/instruments/${e.target.id}`, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({musician_id: null})
        }).then(r => r.json()).then(() => {
            setError("Instrument successfully removed from musician!")
        })
    }

    const instrumentElements = musicianInstruments.map((i) => {
        return <li key={i.id}>
            <div>{i.name} - {i.brand} ({i.instrument_class})</div>
            <button onClick={handleRemove} id={i.id}>Remove</button>
        </li>
    })

    return (
        <div>
            <h2>{musicianName}'s Instrument List</h2>
            <ul>
                {instrumentElements}
            </ul>
            <InstrumentsWithNoOwner id={id} setError={setError} error={error} />
            <br></br>
            {error}
            <br></br>
            <Link to="/musicians" className="back-button">Back</Link>
        </div>
    )
}
