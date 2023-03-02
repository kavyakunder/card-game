import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useAppStyles } from "./App.style";

const CARD_DATA: CardType[] = [
  { id: 1, color: "red" },
  { id: 2, color: "blue" },
  { id: 3, color: "yellow" },
  { id: 4, color: "red" },
  { id: 5, color: "blue" },
  { id: 6, color: "yellow" },
];

type CardType = {
  id: number;
  color: string;
};

function App(): JSX.Element {
  const [cards, setCards] = useState<Array<CardType>>([]);
  const [flippedCards, setFlippedCards] = useState<Array<CardType>>([]);
  const [matchedCards, setMatchedCards] = useState<Array<CardType>>([]);
  const [score, setScore] = useState<number>(0);
  const [chances, setChances] = useState<number>(0);
  const classes = useAppStyles();

  const handleCardClick = (card: CardType) => {
    if (
      matchedCards.includes(card) ||
      flippedCards.includes(card) ||
      flippedCards.length === 2
    ) {
      return;
    }

    const newFlippedCards = [...flippedCards, card];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setChances(chances + 1);

      if (newFlippedCards[0].color === newFlippedCards[1].color) {
        setMatchedCards([...matchedCards, ...newFlippedCards]);
        setScore(score + 1);
        setFlippedCards([]);
        return;
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const playAgain = () => {
    setCards([...CARD_DATA]);
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
      <Typography textAlign="center" variant="h4">
        Score - {score}
      </Typography>
      <Typography textAlign="center" variant="h4">
        Chances - {chances}
      </Typography>
      <Typography textAlign="center" variant="h5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
      </Typography>
      <Grid
        container
        alignItems="center"
        direction="row"
        justifyContent="center"
      >
        {cards.map((card) => (
          <Grid
            item
            alignItems="center"
            direction="row"
            justifyContent="center"
            key={card.id}
            margin={3}
            onClick={() => handleCardClick(card)}
            className={`${classes.card}`}
            style={{
              backgroundColor:
                matchedCards.includes(card) || flippedCards.includes(card)
                  ? card.color
                  : "orange",
            }}
          >
            {flippedCards.includes(card) || matchedCards.includes(card)
              ? card.color
              : "♣️"}
          </Grid>
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
