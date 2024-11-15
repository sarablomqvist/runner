import React from 'react'
import './App.css'
import KmTime from './components/KmTime/KmTime'
import Nav from './components/Nav/Nav'

function App() {
    return (
        <div>
            <Nav />
            <h1>Run tracker</h1>
            <KmTime />
        </div>
    )
}

export default App
