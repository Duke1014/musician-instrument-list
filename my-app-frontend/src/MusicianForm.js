import React, { useState, useEffect } from 'react'

export default function MusicianForm({setMusicians}) {

    const [formName, setFormName] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("http://localhost:9292/musicians")
        .then(r => r.json()).then((data) => {
            const musician = data.find(m => m.name === formName)
            if (musician) {
                setError("Name already in use, please try another one.")
            } else {
                fetch("http://localhost:9292/musicians", {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({username: formName})
                }).then(r => r.json()).then((data) => {
                    setMusicians(data)
                })
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input 
                            type="text"
                            name="name"
                            value={formName}
                        onChange={e => setFormName(e.target.value)}
                    />
                    <input type="submit"></input>
                </label>
            </form>
            <div>
                {error}
            </div>
        </div>
    )
}
