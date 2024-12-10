import React from 'react'

function TableGoal({ goals }) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Distans</th>
                        <th>Min</th>
                    </tr>
                </thead>
                <tbody>
                    {goals.map((goal, index) => (
                        <tr key={index}>
                            <td>{goal.km}</td>
                            <td>{goal.time}</td>
                        </tr>
                    ))}
                    <tr>
                        <td>21.1 km</td>
                        <td>2 h 15 min</td>
                    </tr>
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
