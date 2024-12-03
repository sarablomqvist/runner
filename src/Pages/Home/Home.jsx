import React from 'react'
import KmTime from '../../components/KmTime/KmTime'
import style from './Home.module.css'

function Home() {
    return (
        <div>
            {' '}
            <h1 className={style.h1}>Run log</h1>
            <KmTime />
        </div>
    )
}

export default Home
