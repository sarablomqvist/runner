import React from 'react'
import style from './RunTable.module.css'

function RunTable({ list, onDelete }) {
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
                            <td className={style.tdColor}>{entry.date}</td>
                            <td className={style.tdColor}>{entry.time} min</td>
                            <td className={style.tdColor}>{entry.km} km</td>
                            <td>{entry.speed} min / km</td>
                            <td>
                                <button onClick={() => onDelete(index)}>X</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RunTable
