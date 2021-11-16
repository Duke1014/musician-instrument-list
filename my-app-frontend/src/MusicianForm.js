import React, { useState, useEffect } from 'react'

export default function MusicianForm({setMusicians, musicians}) {

    const [formName, setFormName] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        setSuccess()
        const musician = musicians.find(m => m.name === formName)
        if (musician) {
            setError("Name already in use, please try another one.")
        } else {
            setError("")
            useEffect(() => {
                fetch("http://localhost:9292/musicians", {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({name: formName})
                }).then(r => r.json()).then((data) => {
                    console.log(data)
                })
            }, [])
        }
    }


    return (
        <div>
            {success ?
            <>
            <div>
                Musician saved successfully!
            </div>
            </>: <>
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
            </>
            }
            
        </div>
    )
}
