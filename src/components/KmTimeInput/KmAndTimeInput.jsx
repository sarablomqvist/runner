import React from 'react'
import style from './KmAndTimeInput.module.css'

function KmAndTimeInput({ km, time, onKmChange, onTimeChange, onDateChange, onAddEntry, error, date, enterClick }) {
    return (
        <div className={style.wrapper}>
            <div className={style.runtrackerWrapper}>
                <input
                    className={style.input}
                    value={date}
                    onChange={onDateChange}
                    placeholder="Datum"></input>
                <input
                    className={style.input}
                    value={km}
                    onChange={onKmChange}
                    placeholder="Distans (km)" />
                <input
                    className={style.input}
                    value={time}
                    onKeyDown={enterClick}
                    onChange={onTimeChange}
                    placeholder="Tid (min)"
                />
                <button
                    className={style.button}
                    onClick={onAddEntry}>
                        Beräkna
                </button>
                <p>{error}</p>
            </div>
        </div>
    )
}

export default KmAndTimeInput
