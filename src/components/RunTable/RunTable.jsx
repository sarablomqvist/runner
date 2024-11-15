import React from 'react'
import style from './RunTable.module.css'

function RunTable({ list, date }) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Datum</th>
                        <th>Min</th>
                        <th>Antal km</th>
                        <th>Tempo</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((entry, index) => (
                        <tr key={index}>
                            <td>{date}</td>
                            <td>{entry.time} min</td>
                            <td>{entry.km} km</td>
                            <td>{entry.speed} min / km</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RunTable
