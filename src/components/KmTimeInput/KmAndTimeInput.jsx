import React from 'react'

function KmAndTimeInput({ km, time, onKmChange, onTimeChange, onAddEntry, error }) {
    return (
        <div className="runtracker-wrapper">
            <input value={time} onChange={onTimeChange} placeholder="Hur länge? (min)" />
            <input value={km} onChange={onKmChange} placeholder="Hur långt? (km)" />
            <button onClick={onAddEntry}>Beräkna</button>
            <p>{error}</p>
        </div>
    )
}

export default KmAndTimeInput
