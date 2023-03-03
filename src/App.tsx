import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Card } from "./component/Card";

const CARD_DATA: CardType[] = [
  { id: 1, design: "♣️" },
  { id: 2, design: "♠️" },
  { id: 3, design: "♦️" },
  { id: 4, design: "♣️" },
  { id: 5, design: "♠️" },
  { id: 6, design: "♦️" },
];

export type CardType = {
  id: number;
  design: string;
};

function App(): JSX.Element {
  const [cards, setCards] = useState<Array<CardType>>([]);
  const [flippedCards, setFlippedCards] = useState<Array<CardType>>([]);
  const [matchedCards, setMatchedCards] = useState<Array<CardType>>([]);
  const [score, setScore] = useState<number>(0);
  const [chances, setChances] = useState<number>(0);

  const handleCardClick = (card: CardType) => {
    if (
      matchedCards.includes(card) ||
      flippedCards.includes(card) ||
      flippedCards.length === 2
    )
      return;

    const newFlippedCards = [...flippedCards, card];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setChances(chances + 1);

      if (newFlippedCards[0].design === newFlippedCards[1].design) {
        setMatchedCards([...matchedCards, ...newFlippedCards]);
        setScore(score + 1);
        setFlippedCards([]);
        return;
      }
      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  };

  const playAgain = () => {
    setFlippedCards([]);
    setMatchedCards([]);
    setScore(0);
    setChances(0);
  };

  useEffect(() => {
    setCards([...CARD_DATA]);
  }, []);

  return (
    <div>
      <Typography textAlign="center" variant="h4" margin={3}>
        🃏 Match the memory 🧠
      </Typography>
      <Typography textAlign="center" variant="h5" margin={2}>
        Put your memory skills to the test with our card game!
      </Typography>
      <Grid
        alignItems="center"
        direction="row"
        display="flex"
        justifyContent="space-around"
      >
        <Typography textAlign="center" variant="h5">
          Chances - {chances}
        </Typography>
        <Typography textAlign="center" variant="h5">
          Score - {score}
        </Typography>
      </Grid>

      <Grid
        container
        alignItems="center"
        direction="row"
        justifyContent="center"
      >
        {cards.map((card) => (
          <Card
            card={card}
            handleCardClick={handleCardClick}
            flippedCards={flippedCards}
            matchedCards={matchedCards}
          />
        ))}
      </Grid>

      {score === 3 && (
        <Button onClick={playAgain} variant="contained">
          Play Again!
        </Button>
      )}
    </div>
  );
}

export default App;
