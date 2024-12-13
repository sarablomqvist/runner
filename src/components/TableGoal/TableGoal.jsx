import React from 'react'

function TableGoal({ goals }) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Distans</th>
                        <th>Min</th>
                        <th>Ta bort</th>
                    </tr>
                </thead>
                <tbody>
                    {goals.map((goal, index) => (
                        <tr key={index}>
                            <td>{goal.km} km</td>
                            <td>{goal.time} min</td>
                            <td><button></button></td>
                        </tr>
                    ))}
                    <tr>
                        <td>10 km</td>
                        <td>55 min</td>
                    </tr>
                    <tr>
                        <td>5 km</td>
                        <td>25 min</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default TableGoal
