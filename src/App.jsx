import { useEffect, useState } from 'react'
import './App.css'

function KmAndTime() {
    const [km, setKm] = useState('')
    const [time, setTime] = useState('')
    const [list, setList] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        const savedList = localStorage.getItem('runTrackerList')
        if (savedList) {
            setList(JSON.parse(savedList))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('runTrackerList', JSON.stringify(list))
    }, [list])

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
            const paceInMinutes = (time / km).toFixed(2)
            const minutes = Math.floor(paceInMinutes)
            const seconds = Math.round((paceInMinutes - minutes) * 60)
            const pace = `${minutes}:${seconds.toString().padStart(2, '0')}`

            const newList = [...list, { km, time, speed: pace }]
            setList(newList)
            setKm('')
            setTime('')
            setError('')
        } else {
            alert('Fyll i båda fält')
        }
    }

    const [date, setDate] = useState(new Date())
    const theDate = date.toDateString()

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
                            <th>Datum</th>
                            <th>Min</th>
                            <th>Antal km</th>
                            <th>Tempo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((onePost, index) => (
                            <tr key={index}>
                                <td>{theDate}</td>
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
            <div className="background">
                <h1>Run tracker</h1>
                <KmAndTime />
            </div>
        </>
    )
}

export default App
