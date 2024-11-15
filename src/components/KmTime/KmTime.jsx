import React, { useEffect, useState } from 'react'
import KmAndTimeInput from '../KmTimeInput/KmAndTimeInput'
import RunTable from '../RunTable/RunTable'

function KmTime() {
    const [km, setKm] = useState('')
    const [time, setTime] = useState('')
    const [list, setList] = useState([])
    const [error, setError] = useState('')
    const [date] = useState(new Date().toDateString())

    // useEffect(() => {
    //     localStorage.setItem('runTrackerList', JSON.stringify(list))
    // }, [list])

    // useEffect(() => {
    //     const savedList = localStorage.getItem('runTrackerList')
    //     if (savedList) {
    //         setList(JSON.parse(savedList))
    //     }
    // }, [])

    const handleKmChange = (event) => {
        const value = event.target.value
        if (/^\d*\.?\d*$/.test(value)) {
            setKm(value)
            setError('')
        } else {
            alert('Skriv en siffra!')
        }
    }

    const handleTimeChange = (event) => {
        const value = event.target.value
        if (/^\d*\.?\d*$/.test(value)) {
            setTime(value)
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

    return (
        <>
            <KmAndTimeInput
                km={km}
                time={time}
                onKmChange={handleKmChange}
                onTimeChange={handleTimeChange}
                onAddEntry={addEntry}
                error={error}
            />
            <RunTable list={list} date={date} />
        </>
    )
}

export default KmTime
