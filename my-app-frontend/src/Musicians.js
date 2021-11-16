import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

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
            <Link to="/" className="back-button">Back</Link>
        </div>
    )
}
