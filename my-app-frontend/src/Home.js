import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1>
                Hello
            </h1>
            <h2>
                Create a list of instruments for a musician!
            </h2>
            <li>
                <Link to="/musicians" className="musicians-button">Musician List</Link>
            </li>
            <li>
                <Link to="/instruments" className="instruments-button">Instruments List</Link>
            </li>
        </div>
    )
}
