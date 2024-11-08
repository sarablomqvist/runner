import { useState } from 'react'
import './App.css'

function KmAndTime() {
    const [km, setKm] = useState('')
    const [time, setTime] = useState('')
    const [list, setList] = useState([])
    const [error, setError] = useState('')

    const handleKmChange = (event) => {
        const value = event.target.value
        if (/^\d*\.?\d*$/.test(value)) {
            setKm(value)
            setError('')
        } else {
            setError('Skriv en siffra!')
        }
    }

    const handleTimeChange = (event) => {
        const value = event.target.value
        if (/^\d*\.?\d*$/.test(value)) {
            setTime(event.target.value)
            setError('')
        } else {
            alert('Skriv en siffra')
        }
    }

    const addEntry = () => {
        if (km && time) {
            const speed = (time/km).toFixed(2)
            setList([...list, { km, time, speed }])
            setKm('')
            setTime('')
            setError('')
        } else {
            alert('Fyll i båda fält')
        }
    }

    return (
        <>
            <div className="runtracker-wrapper">
                <input value={time} onChange={handleTimeChange} placeholder="Hur länge? (min)"></input>
                <input value={km} onChange={handleKmChange} placeholder="Hur långt? (km)"></input>
                <button onClick={addEntry}>Beräkna</button>
                <p>{error}</p>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Min</th>
                            <th>Antal km</th>
                            <th>Tempo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((onePost, index) => (
                            <tr key={index}>
                                <td></td>
                                <td>{onePost.time}</td>
                                <td>{onePost.km}</td>
                                <td>{onePost.speed} min / km</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

function App() {
    return (
        <>
            <h1>Run tracker</h1>
            <KmAndTime />
        </>
    )
}

export default App
