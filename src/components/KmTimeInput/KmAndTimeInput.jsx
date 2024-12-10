import React from 'react'
import style from './KmAndTimeInput.module.css'

function KmAndTimeInput({ km, time, onKmChange, onTimeChange, onDateChange, addEntry, error, date, enterClick }) {
    return (
        <div className={style.wrapper}>
            <div className={style.runtrackerWrapper}>
                <input
                    className={style.input}
                    value={date}
                    onKeyDown={enterClick}
                    onChange={onDateChange}
                    placeholder="Datum"
                />
                <input
                    className={style.input}
                    value={km}
                    onKeyDown={enterClick}
                    onChange={onKmChange}
                    placeholder="Distans (km)"
                />
                <input
                    className={style.input}
                    value={time}
                    onKeyDown={enterClick}
                    onChange={onTimeChange}
                    placeholder="Tid (min)"
                />
                <button
                    className={style.button}
                    onClick={addEntry}>
                        Beräkna
                </button>
                <p>{error}</p>
            </div>
        </div>
    )
}

export default KmAndTimeInput
