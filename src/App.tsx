import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Card } from "./component/Card";
import AppBar from "@mui/material/AppBar";

const CARD_DATA: CardType[] = [
  { id: 1, design: "♣️" },
  { id: 2, design: "❤️" },
  { id: 3, design: "♦️" },
  { id: 4, design: "♣️" },
  { id: 5, design: "♠️" },
  { id: 6, design: "♦️" },
  { id: 7, design: "♠️" },
  { id: 8, design: "❤️" },
  { id: 9, design: "😂" },
  { id: 10, design: "😂" },
  { id: 11, design: "🦋" },
  { id: 12, design: "🦋" },
  { id: 13, design: "🐶" },
  { id: 14, design: "🐶" },
  { id: 15, design: "⭐️" },
  { id: 16, design: "⭐️" },
];

export type CardType = {
  id: number;
  design: string;
};

function App(): JSX.Element {
  const [cards, setCards] = useState<Array<CardType>>([]);
  const [flippedCards, setFlippedCards] = useState<Array<CardType>>([]);
  const [matchedCards, setMatchedCards] = useState<Array<CardType>>([]);
  const [moves, setMoves] = useState<number>(0);
  const [start, setStart] = useState(true);
  const [level, setLevel] = useState("easy");

  const shuffleArray = (array: CardType[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

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
      setMoves(moves + 1);

      if (newFlippedCards[0].design === newFlippedCards[1].design) {
        setMatchedCards([...matchedCards, ...newFlippedCards]);
        setFlippedCards([]);
        return;
      }
      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  };

  const playAgain = () => {
    setStart(true);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setCards(shuffleArray(CARD_DATA));
  };

  const handleDifficultyLevel = (level: string) => {
    setLevel(level);
    setStart(false);
  };

  useEffect(() => {
    let numOfCards;

    switch (level) {
      case "easy":
        numOfCards = 8;
        break;
      case "medium":
        numOfCards = 12;
        break;
      case "hard":
        numOfCards = 16;
        break;
      default:
        numOfCards = 8;
    }
    setCards(shuffleArray(CARD_DATA.slice(0, numOfCards)));
  }, [level]);

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#E8826F" }}>
        <Typography
          textAlign="center"
          variant="h4"
          margin={2}
          data-testid="title"
        >
          Match the Cards🃏
        </Typography>
      </AppBar>

      {!start && matchedCards.length !== cards.length ? (
        <Typography textAlign="center" variant="h5" m={2}>
          Moves: {moves}
        </Typography>
      ) : null}
      {matchedCards.length === cards.length ? (
        <>
          <Typography textAlign="center" variant="h4" m={2}>
            Yay! You won. You took {moves} moves
          </Typography>
          <Button variant="contained" onClick={playAgain}>
            Play Again
          </Button>
        </>
      ) : null}

      {start ? (
        <Grid
          container
          alignItems="center"
          display="flex"
          justifyContent="space-around"
          direction="column"
        >
          <Typography
            textAlign="center"
            variant="h5"
            m={2}
            data-testid="sub-title"
          >
            Flip and Match to Win! Find all the pairs in the least moves
            possible!
          </Typography>
          <Button
            variant="contained"
            onClick={() => handleDifficultyLevel("easy")}
          >
            Easy
          </Button>
          <Button
            variant="contained"
            onClick={() => handleDifficultyLevel("medium")}
          >
            Medium
          </Button>
          <Button
            variant="contained"
            onClick={() => handleDifficultyLevel("hard")}
          >
            Hard
          </Button>
        </Grid>
      ) : (
        <Grid
          container
          alignItems="center"
          display="flex"
          direction="row"
          justifyContent="center"
        >
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              handleCardClick={handleCardClick}
              flippedCards={flippedCards}
              matchedCards={matchedCards}
            />
          ))}
        </Grid>
      )}
    </>
  );
}

export default App;
