import CardsContainer from "../CardsContainer";
import AddPostForm from "../AddPostForm";
import { cards } from '../data/cards';
import { useState, useEffect } from "react";
import Triggers from "../Triggers";
import '../index.css';

function App() {

  const [newCards, setNewCards] = useState(cards);
  const [language, setLanguage] = useState('eng');

  useEffect(() => {
    const currentCards = JSON.parse(localStorage.getItem('cards'));
    setNewCards(currentCards);
  }, []);
  
  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(newCards));
  }, [newCards]);
  

  const addNewCard = (eng, rus) => setNewCards([
    ...newCards,
    {
      id: Date.now(),
      eng,
      rus,
      language: 'eng'
    }
  ]);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    setNewCards(newCards.map(card => {
      return {
        ...card,
        language: newLanguage
      }
    }));
  };

  const upendCard = (event, currentLanguage, currentId) => {
    event.stopPropagation();
    const updatedLanguage = currentLanguage === 'eng' ? 'rus' : 'eng';

    setNewCards(newCards.map(card => {
      if (card.id === currentId) {
        card.language = updatedLanguage
      }
      return card
    }))
  }

  const deleteCard = (event, currentId) => {
    event.stopPropagation();
    setNewCards(newCards.filter(card => card.id !== currentId))
  };

  return (
    <div className='wrapper'>
      <AddPostForm addNewCard={addNewCard}/>
      <CardsContainer cardsArray={newCards} upendCard={upendCard} deleteCard={deleteCard} />
      <Triggers changeLanguage={changeLanguage} />
    </div>
  );
}

export default App;
