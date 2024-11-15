import React, { useEffect, useState } from 'react'
import KmAndTimeInput from '../KmTimeInput/KmAndTimeInput'
import RunTable from '../RunTable/RunTable'

function KmTime() {
    const [km, setKm] = useState('')
    const [time, setTime] = useState('')
    const savedJson = localStorage.getItem('LocaleStorageList')
    const convertedJson = JSON.parse(savedJson)
    const [list, setList] = useState(convertedJson)
    const [error, setError] = useState('')
    const [date] = useState(new Date().toDateString())

    if (list == null) {
        setList([])
    }

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
            const paceInMinutes = time / km //tid delat på km
            const minutes = Math.floor(paceInMinutes) //tagit bort decimaler
            const seconds = Math.round((paceInMinutes - minutes) * 60) //tar bort minuter = bara decimaler kvar * 60 = sekunder. Avrunda
            const pace = `${minutes}:${seconds.toString().padStart(2, '0')}` //gjort om nr till sträng o sen lagt på 0 om "siffran" är mindre än 2 tecken

            const newItem = { km, time, speed: pace }
            const newList = [...list, newItem]
            setList(newList)
            localStorage.setItem('LocaleStorageList', JSON.stringify(newList))
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
