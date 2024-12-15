import React from 'react'
import style from './App.module.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import TrainingSchedule from './Pages/Trainingschedule/TrainingSchedule'
import Home from './Pages/Home/Home'
import './App.css'

function App() {
    return (
        <div className={style.background}>
            <BrowserRouter>
                <nav className={style.nav}>
                    <NavLink to="/" className={style.li}>
                        HEM
                    </NavLink>
                    <NavLink to="/trainingschedule" className={style.li}>
                        TRÄNINGSSCHEMA
                    </NavLink>
                </nav>
                <Routes>
                    <Route element={<Home />} index></Route>
                    <Route element={<TrainingSchedule />} path="trainingschedule" />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
