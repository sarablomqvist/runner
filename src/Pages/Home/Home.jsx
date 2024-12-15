import React from 'react'
import style from './Home.module.css'
import PaceTracker from '../../components/Pacetracker/PaceTracker'

function Home() {
    return (
        <div>
            {' '}
            <h1 className={style.h1}>Löpning</h1>
            <PaceTracker />
        </div>
    )
}

export default Home
