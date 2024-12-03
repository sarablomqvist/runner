import React from 'react'

function TableGoal({ handleKm }) {
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
                        <td>{handleKm}</td>
                        <td>2.15 h</td>
                        <td>6.15 min / km</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default TableGoal
