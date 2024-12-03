import React from 'react'
import style from './App.module.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import TrainingSchedule from './Pages/Trainingschedule/TrainingSchedule'
import Home from './Pages/Home/Home'
import Goal from './Pages/Goal/Goal'

function App() {
    return (
        <div className={style.background}>
            <BrowserRouter>
                <nav className={style.nav}>
                    <Link to="/" className={style.li}>HEM</Link>
                    <Link to="/trainingschedule" className={style.li}>TRÄNINGSSCHEMA</Link>
                    <Link to="/goal" className={style.li}>MINA MÅL</Link>
                </nav>
                <Routes>
                    <Route element={<Home />} index></Route>
                    <Route element={<TrainingSchedule />} path="trainingschedule" />
                    <Route element={<Goal />} path="goal" />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
