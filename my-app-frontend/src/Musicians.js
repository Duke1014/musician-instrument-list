import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import MusicianForm from './MusicianForm'

export default function Musicians() {

    const [musicians, setMusicians] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/musicians")
        .then ((r) => r.json()).then((data) => {
            console.log(data)
            setMusicians(data)
        })
    }, [])

    const musicianElements = musicians.map((m) => {
        return <li key={m.id}>
            {m.name}
        </li>
    })

    return (
        <div>
            <ul>
                {musicianElements}
            </ul>
            <MusicianForm setMusicians={setMusicians} musicians={musicians} />
            <Link to="/" className="back-button">Back</Link>
        </div>
    )
}
