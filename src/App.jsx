import { Card } from "./components/Card";
import { GameHeader } from "./components/GameHeader";
import { WinMessage } from "./components/WinMessage";
import { gameLogic } from "./hook/gameLogic";

const cardValues = [
  "🦁",
  "🐘",
  "🦒",
  "🐒",
  "🦓",
  "🐯",
  "🦛",
  "🐧",
  "🦁",
  "🐘",
  "🦒",
  "🐒",
  "🦓",
  "🐯",
  "🦛",
  "🐧",
];

function App() {
  const {
    score,
    moves,
    initializeGame,
    isGameComplete,
    cards,
    handleCardClick,
  } = gameLogic(cardValues);

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame} />
      {isGameComplete && <WinMessage moves={moves} />}
      <div className="cards-grid">
        {cards.map((card) => (
          <Card card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
