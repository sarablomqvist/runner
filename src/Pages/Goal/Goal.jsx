import React from 'react'
import style from './Goal.module.css'
import TableGoal from '../../components/TableGoal/TableGoal'
import InputGoal from '../../components/InputGoal/InputGoal'
import { useState } from "react";

function Goal() {
    const [goalList, setGoalList] = useState([])

    const addGoal = (km, time) => {
        if (km && time) {
            const newGoalList = [...goalList, {km, time}]
            setGoalList(newGoalList)
        }
    }

    return (
        <div className={style.container}>
            <h1 className={style.h1}>Mina mål</h1>
            <InputGoal addGoal={addGoal}/>
            <TableGoal goals={goalList}/>
        </div>
    )
}

export default Goal
