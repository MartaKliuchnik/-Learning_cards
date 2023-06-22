import React from 'react';
import s from './style.module.css';

export default function Card({ eng, rus, language }) {
    const currentWord = language === 'eng' ? eng : rus;

    const styleForEngCard = {
        backgroundColor: language === 'eng' ? '#2980b9' : 'white',
        color: language === 'eng' ? 'white' : '#2980b9'
    }

    return (
        <div className={s.card} style={styleForEngCard}>
            <p>{currentWord}</p>
        </div>
    )
}
