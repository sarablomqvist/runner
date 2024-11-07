import { useState } from 'react'
import './App.css'

function Km() {
    const [km, setKm] = useState('')
    const [time, setTime] = useState('')

    return (
        <>
            <input
                value={time}
                onChange={(event) => {
                    setTime(event.target.value)
                }}
                placeholder="Hur länge? (tid)"
            ></input>
            <input
                value={km}
                onChange={(event) => {
                    setKm(event.target.value)
                }}
                placeholder="Hur långt? (km)"
            ></input>
            <button>Beräkna</button>
            <div>
                <ol>
                    <li>
                        {km} + {time}
                    </li>
                </ol>
            </div>
        </>
    )
}

function App() {
    return (
        <>
            <Km />
        </>
    )
}

export default App
