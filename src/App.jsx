import React from 'react'
import KmTime from './components/KmTime/KmTime'
import Nav from './components/Nav/Nav'
import style from './App.module.css'

function App() {
    return (
        <div className={style.background}>
            <Nav />
            <h1 className={style.h1}>Run tracker</h1>
            <KmTime />
        </div>
    )
}

export default App
