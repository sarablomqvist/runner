import React from 'react'
import schedule from '../../../img/traningsschema.png'
import style from './TrainingSchedule.module.css'

function TrainingSchedule() {
    return (
        <div className={style.container}>
            <h1>Träningsschema inför halvmaraton</h1>
            <img className={style.img} src={schedule} alt="Träningsschema" />
        </div>
    )
}

export default TrainingSchedule
