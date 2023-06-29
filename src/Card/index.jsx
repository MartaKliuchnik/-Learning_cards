import React from 'react';
import s from './style.module.css';

export default function Card({ id, eng, rus, language, upendCard, deleteCard }) {
    const currentWord = language === 'eng' ? eng : rus;

    const styleForEngCard = {
        backgroundColor: language === 'eng' ? '#2980b9' : 'white',
        color: language === 'eng' ? 'white' : '#2980b9'
    }

    return (
        <div
            className={s.card}
            style={styleForEngCard}
            onClick={(event) => {
                const targetClassName = event.target.className;
                if (targetClassName.includes(s.clear_item_container)
                    || targetClassName.includes(s.clear_item)) {
                    deleteCard(event, id)
                } else {
                    upendCard(event, language, id)}
                }
            }
        >
            <div className={s.clear_item_container}>
                <p className={s.clear_item}>clear</p>
            </div>
            <p>{currentWord}</p>
        </div>
    )
}
