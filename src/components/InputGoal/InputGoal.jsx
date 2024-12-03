import React, { useState } from 'react'
import style from './InputGoal.module.css'

function InputGoal() {
    const [km, setKm] = useState('')

    const handleKm = (event) => {
        const value = event.target.value
        if (value) {
            setKm(value)
        }
        console.log(value)
    }

    return (
        <div className={style.wrapper}>
            <input
                className={style.input}
                onChange={handleKm}
                handleKm={handleKm}
                value={km}
                placeholder="Distans"
            ></input>
            <input className={style.input} placeholder="Tid"></input>
            <button className={style.button}>Räkna ut medeltempo</button>
        </div>
    )
}

export default InputGoal
