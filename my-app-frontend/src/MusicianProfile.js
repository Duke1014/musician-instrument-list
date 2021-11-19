import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function MusicianProfile() {

    const { id } = useParams()

    const [instruments, setInstruments] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/musicians/${id}`)
        .then((r) => r.json()).then((data) => {
            console.log(data)
        })
    }, [])

    const instrumentElements = instruments.map((i) => {
        return <li key={i.id}>

        </li>
    })

    return (
        <div>
            <h2>*Musician*'s Instrument List</h2>
            <ol>

            </ol>
        </div>
    )
}
