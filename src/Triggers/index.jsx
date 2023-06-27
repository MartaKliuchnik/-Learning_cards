import React from 'react';
import s from './index.module.css';

export default function Triggers({changeLanguage}) {

    return (
        <div className={s.btnContainer}>
            <button onClick={() => changeLanguage('eng')} className={s.btnChangeLanguage}>Eng</button>
            <button onClick={() =>changeLanguage('rus')} className={s.btnChangeLanguage}>Rus</button>
        </div>
    )
}
