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
    const [date, setDate] = useState('')

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
        if (value) {
            setKm(value)
            setError('')
        } else {
            alert('Skriv en siffra!')
        }
    }

    const handleTimeChange = (event) => {
        const value = event.target.value
        if (value) {
            setTime(value)
            setError('')
        } else {
            alert('Skriv en siffra')
        }
    }

    const handleDelete = (index) => {
        const newList = list.filter((_, i) => i !== index)
        setList(newList)
        localStorage.setItem('LocaleStorageList', JSON.stringify(newList))
    }

    const handleDate = (event) => {
        const value = event.target.value
        if (value) {
            setDate(value)
            setError('')
        } else {
            alert('Skriv datum')
        }
    }

    const addEntry = () => {
        if (km && time && date) {
            const paceInMinutes = time / km //tid delat på km
            const minutes = Math.floor(paceInMinutes) //tagit bort decimaler
            const seconds = Math.round((paceInMinutes - minutes) * 60) //tar bort minuter = bara decimaler kvar * 60 = sekunder. Avrunda
            const pace = `${minutes}:${seconds.toString().padStart(2, '0')}` //gjort om nr till sträng o sen lagt på 0 i början om "siffran" är mindre än 2 tecken

            const newItem = { date, km, time, speed: pace }
            const newList = [...list, newItem]
            setList(newList)
            localStorage.setItem('LocaleStorageList', JSON.stringify(newList))
            setDate('')
            setKm('')
            setTime('')
            setError('')
        } else {
            alert('Fyll i alla fält')
        }
    }

    const enterClick = (event) => {
        if (event.key === 'Enter') {
            addEntry()
        }
    }

    return (
        <>
            <KmAndTimeInput
                date={date}
                km={km}
                time={time}
                onDateChange={handleDate}
                onKmChange={handleKmChange}
                onTimeChange={handleTimeChange}
                onAddEntry={addEntry}
                enterClick={enterClick}
                error={error}
            />

            <RunTable date={handleDate} list={list} onDelete={handleDelete} />
        </>
    )
}

export default KmTime
