import React from 'react'
import style from './KmAndTimeInput.module.css'

function KmAndTimeInput({ km, time, onKmChange, onTimeChange, onAddEntry, error }) {
    return (
        <div className={style.wrapper}v>
            <div className={style.runtrackerWrapper}>
                <input className={style.input} value={time} onChange={onTimeChange} placeholder="Hur länge? (min)" />
                <input className={style.input} value={km} onChange={onKmChange} placeholder="Hur långt? (km)" />
                <button onClick={onAddEntry}>Beräkna</button>
                <p>{error}</p>
            </div>
        </div>
    )
}

export default KmAndTimeInput
