import React from 'react'
import style from './Nav.module.css'

const Nav = () => {
    return (
        <div>
            <nav>
                <ul className={style.wrapperLi}>
                    <li className={style.li}>Träningsschema</li>
                    <li className={style.li}>Mina mål</li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
