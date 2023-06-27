import React, { useEffect } from 'react';
import Card from '../Card';
import s from './style.module.css';


export default function CardsContainer({ cardsArray }) {
    
    return (
        <div className={s.cards_container}>
            {
                cardsArray.map(card => <Card key={card.id} {...card} />)
            }
        </div>
    )
}
