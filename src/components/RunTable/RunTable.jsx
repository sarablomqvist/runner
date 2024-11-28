import React from 'react'
import style from './RunTable.module.css'
import DeleteRun from '../DeleteRun/DeleteRun'

function RunTable({ list, date, onDelete }) {
    return (
        <div className={style.wrapper}>
            <table>
                <thead>
                    <tr>
                        <th>Datum</th>
                        <th>Min</th>
                        <th>Antal km</th>
                        <th>Tempo</th>
                        <th>Ta bort</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((entry, index) => (
                        <tr key={index}>
                            <td>{date}</td>
                            <td>{entry.time} min</td>
                            <td>{entry.km} km</td>
                            <td>{entry.speed} min / km</td>
                            <td>
                                <button onClick={() => onDelete(index)}>X</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <DeleteRun />
        </div>
    )
}

export default RunTable
