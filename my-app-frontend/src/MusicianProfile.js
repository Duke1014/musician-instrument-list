import React, { useEffect } from 'react'

export default function MusicianProfile({ id }) {

    useEffect(() => {
        fetch(`http://localhost:9292/musicians/${id}`)
        .then((r) => r.json()).then((data) => {
            console.log(data)
        })
    }, [])

    return (
        <div>
            
        </div>
    )
}
