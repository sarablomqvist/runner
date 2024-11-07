import { useState } from 'react'
import './App.css'

function Km() {
    const [km, setKm] = useState('')
    const [time, setTime] = useState('')
    const [list, setList] = useState([])

    const handleKmChange = (event) => {
        setKm(event.target.value)
    }

    const handleTimeChange = (event) => {
        setTime(event.target.value)
    }

    const addEntry = () => {
        setList([...list, { km, time }])
        setKm('')
        setTime('')
    }

    return (
        <>
            <input value={time} onChange={handleTimeChange} placeholder="Hur länge? (tid)"></input>
            <input value={km} onChange={handleKmChange} placeholder="Hur långt? (km)"></input>
            <button onClick={addEntry}>Beräkna</button>
            <div>
                <ol>
                    {list.map((onePost, index) => (
                        <li key={index}>
                            Tid: {onePost.time} min - Sträcka: {onePost.km} km =
                        </li>
                    ))}
                </ol>
            </div>
        </>
    )
}

function App() {
    return (
        <>
        <h1>Run tracker</h1>
            <Km />
        </>
    )
}

export default App
