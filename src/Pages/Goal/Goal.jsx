import React from 'react'
import style from './Goal.module.css'
import TableGoal from '../../components/TableGoal/TableGoal'
import InputGoal from '../../components/InputGoal/InputGoal'

function Goal() {
    return (
        <div className={style.container}>
            <h1 className={style.h1}>Mina mål</h1>
            <InputGoal />
            <TableGoal />
        </div>
    )
}

export default Goal
