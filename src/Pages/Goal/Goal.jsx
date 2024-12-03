import React from 'react'
import style from './Goal.module.css'

function TableGoal() {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Distans</th>
                        <th>Min</th>
                        <th>Tempo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

function Input() {
    return (
        <div className={style.inputContainer}>
            <input placeholder="Distans"></input>
            <input placeholder="Tid"></input>
            <button>Räkna ut medeltempo</button>
        </div>
    )
}

function Goal() {
    return (
        <div className={style.container}>
            <h1>Mina mål</h1>
            <Input />
            <TableGoal />
        </div>
    )
}

export default Goal
