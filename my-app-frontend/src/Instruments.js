import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Instruments() {

    const [instruments, setInstruments] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/instruments")
        .then ((r) => r.json()).then((data) => {
            console.log(data)
            setInstruments(data)
        })
    }, [])

    const instrumentElements = instruments.map((i) => {
        return <li key={i.id}>
            {i.name}
            <button>Delete</button>
        </li>
    })

    return (
        <div>
            <ul>
                {instrumentElements}
            </ul>
            <Link to="/" className="back-button">Back</Link>
        </div>
    )
}