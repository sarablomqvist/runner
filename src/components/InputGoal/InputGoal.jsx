import React, { useState } from 'react'
import style from './InputGoal.module.css'

function InputGoal({ addGoal }) {
    const [km, setKm] = useState('')
    const [time, setTime] = useState('')

    const handleKm = (event) => {
        const value = event.target.value
        setKm(value)
    }

    const handleTime = (event) => {
        const value = event.target.value
        setTime(value)
    }

    const handleAddGoal = () => {
            addGoal(km, time)
            setKm('')
            setTime('')
    }

    return (
        <div className={style.wrapper}>
            <input className={style.input} onChange={handleKm} value={km} placeholder="Distans"></input>
            <input className={style.input} onChange={handleTime} value={time} placeholder="Tid"></input>
            <button onClick={handleAddGoal} className={style.button}>
                OK
            </button>
        </div>
    )
}

export default InputGoal
