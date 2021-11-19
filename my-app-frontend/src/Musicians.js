import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import MusicianForm from './MusicianForm'

export default function Musicians() {

    const [musicians, setMusicians] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        fetch("http://localhost:9292/musicians")
        .then((r) => r.json()).then((data) => {
            console.log(data)
            setMusicians(data)
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

    const musicianElements = musicians.map((m) => {
        return <li key={m.id}>
            <Link to={`/musicians/${m.id}`} className={`musician-link-${m.id}`} id={m.id}>{m.name}</Link>
            <> </>
            <button key={m.id} onClick={handleDelete} id={m.id}>Delete</button>
        </li>
    })

    return (
        <div>
            <ul>
                {musicianElements}
            </ul>
            <MusicianForm setMusicians={setMusicians} musicians={musicians} error={error} setError={setError} />
            <Link to="/" className="back-button">Back</Link>
        </div>
    )
}
