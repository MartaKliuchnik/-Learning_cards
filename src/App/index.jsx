import CardsContainer from "../CardsContainer";
import AddPostForm from "../AddPostForm";
import { cards } from '../data/cards';
import { useState } from "react";
import Triggers from "../Triggers";

function App() {

  const [newCards, setNewCards] = useState(cards);
  const [language, setLanguage] = useState('eng');


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

  return (
    <>
      <AddPostForm addNewCard={addNewCard}/>
      <CardsContainer cardsArray={newCards} />
      <Triggers changeLanguage={changeLanguage} />
    </>
  );
}

export default App;
