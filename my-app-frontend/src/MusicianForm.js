import React, { useState } from 'react'

export default function MusicianForm({setMusicians, musicians, error, setError}) {

    const [formName, setFormName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
        fetch("http://localhost:9292/musicians", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: formName})
        }).then(r => r.json())
        .then((data) => {
            let newMusicianList = [...musicians, data]
            setMusicians(newMusicianList)
            setError(`${data.name} saved successfully!`)
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
