import CardsContainer from "../CardsContainer";
import { cards } from '../data/cards';

function App() {
  return (
    <div>
      <CardsContainer cardsArray={cards} />
    </div>
  );
}

export default App;
