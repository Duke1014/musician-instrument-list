import React, { useState, useEffect } from 'react'

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
        </li>
    })

    return (
        <div>
            <ul>
                {instrumentElements}
            </ul>
            <button>
                Back
            </button>
        </div>
    )
}