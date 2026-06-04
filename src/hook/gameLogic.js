import { useEffect, useState } from "react";

export const gameLogic = (cardValues) => {
    
const [cards, setCards] = useState([]);
const [flippedCards, setFlippedCards] = useState([]);
const [matchedCards, setMatchedCards] = useState([]);
const [score, setScore] = useState(0);
const [moves, setMoves] = useState(0);


// randomized array using Knuth function algorithm

function shuffledArray(arr) {
  const shuffle = [...arr]; // Cria uma cópia do array original
  for (let i = shuffle.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]]; // Faz a troca
  }
  return shuffle;
}

const initializeGame = () => {
  const shuffledCards = shuffledArray(cardValues);

  const finalCards = shuffledCards.map((value, index) => ({
    id: index,
    value,
    isFlipped: false,
    isMatched: false,
  }));

  setCards(finalCards);
  setFlippedCards([]);
  setMatchedCards([]);
  setScore(0);
  setMoves(0);
};

useEffect(() => {
  initializeGame();
}, []);

const handleCardClick = (card) => {
  if (card.isFlipped || card.isMatched || flippedCards.length === 2) {
    return;
  }

  const newCards = cards.map((c) => {
    if (c.id === card.id) {
      return { ...c, isFlipped: true };
    } else {
      return c;
    }
  });

  setCards(newCards);

  const newFlippledCards = [...flippedCards, card.id];
  setFlippedCards(newFlippledCards);

  if (flippedCards.length === 1) {
    const firstCard = cards[flippedCards[0]];
    if (firstCard.value === card.value) {
      setTimeout(() => {
        setMatchedCards((prev) => [...prev, firstCard.id, card.id]);
        setScore((prev) => prev + 1);

        setCards((prev) =>
          prev.map((c) => {
            if (c.id === card.id || c.id === firstCard.id) {
              return { ...c, isMatched: true };
            } else {
              return c;
            }
          }),
        );

        setFlippedCards([]);
      }, 250);
    } else {
      setTimeout(() => {
        const flippedBackCard = newCards.map((c) => {
          if (newFlippledCards.includes(c.id) || c.id === card.id) {
            return { ...c, isFlipped: false };
          } else {
            return c;
          }
        });
        setCards(flippedBackCard);
        setFlippedCards([]);
      }, 1000);
    }
    setMoves((prev) => prev + 1);
  }
};

const totalPairs = cardValues.length / 2;
const matchedPairs = matchedCards.length / 2;

const isGameComplete = matchedPairs === totalPairs;

return { cards, score, moves, isGameComplete, initializeGame, handleCardClick };

}

