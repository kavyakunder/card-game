import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import { Card } from "./component/Card";
import { useMemo } from "react";
import { useAppStyles } from "./App.style";

const CARD_DATA: CardType[] = [
  { id: 1, design: "♣️", isFlipped: false, isMatched: false },
  { id: 2, design: "❤️", isFlipped: false, isMatched: false },
  { id: 3, design: "♦️", isFlipped: false, isMatched: false },
  { id: 4, design: "♣️", isFlipped: false, isMatched: false },
  { id: 5, design: "♠️", isFlipped: false, isMatched: false },
  { id: 6, design: "♦️", isFlipped: false, isMatched: false },
  { id: 7, design: "♠️", isFlipped: false, isMatched: false },
  { id: 8, design: "❤️", isFlipped: false, isMatched: false },
  { id: 9, design: "😂", isFlipped: false, isMatched: false },
  { id: 10, design: "😂", isFlipped: false, isMatched: false },
  { id: 11, design: "🦋", isFlipped: false, isMatched: false },
  { id: 12, design: "🦋", isFlipped: false, isMatched: false },
  { id: 13, design: "🐶", isFlipped: false, isMatched: false },
  { id: 14, design: "🐶", isFlipped: false, isMatched: false },
  { id: 15, design: "⭐️", isFlipped: false, isMatched: false },
  { id: 16, design: "⭐️", isFlipped: false, isMatched: false },
];

export type CardType = {
  id: number;
  design: string;
  isFlipped: boolean;
  isMatched: boolean;
};

function App(): JSX.Element {
  const [cards, setCards] = useState<Array<CardType>>([]);
  const [moves, setMoves] = useState<number>(0);
  const classes = useAppStyles();

  const matchedCards = useMemo(
    () => cards.filter((card) => card.isMatched),
    [cards]
  );

  const shuffleArray = (array: CardType[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleCardClick = (clickedCard: CardType) => {
    const updatedCards = [...cards];

    const cardIndex = cards.findIndex((card) => card.id === clickedCard.id);

    updatedCards[cardIndex] = {
      ...updatedCards[cardIndex],
      isFlipped: true,
    };

    setCards(updatedCards);

    const flippedCards = updatedCards.filter(
      (card) => card.isFlipped && !card.isMatched
    );

    if (flippedCards.length === 2) {
      setMoves(moves + 1);
      const [card1, card2] = flippedCards;
      const matchedCards = updatedCards.map((card) => {
        return {
          ...card,
          isMatched:
            (card1.design === card2.design && card.design === card1.design) ||
            card.isMatched,
          isFlipped:
            card1.design !== card2.design &&
            ![card1.id, card2.id].includes(card.id) &&
            card.isFlipped,
        };
      });
      setTimeout(() => {
        setCards(matchedCards);
      }, 1000);
    } else {
      setCards(updatedCards);
    }
  };
  const handleDifficultyLevel = (level: string) => {
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
  };

  const handleRestart = () => {
    setCards([]);
    setMoves(0);
  };

  return (
    <>
      <div className={classes.appHeader}>
        <AppBar position="static">
          <Typography
            textAlign="center"
            variant="h4"
            margin={2}
            data-testid="title"
          >
            Match the Cards🃏
          </Typography>
        </AppBar>
      </div>

      {cards.length === matchedCards.length ? (
        <>
          {matchedCards.length ? (
            <>
              <Typography textAlign="center" variant="h4" m={2}>
                Yay! You won. You took {moves} moves
              </Typography>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                className={classes.btnAll}
              >
                <Button onClick={handleRestart} data-testid="btn-playAgain">
                  Play Again
                </Button>
              </Grid>
            </>
          ) : null}
        </>
      ) : (
        <>
          <Typography textAlign="center" variant="h5" m={2}>
            Moves: {moves}
          </Typography>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={classes.btnAll}
          >
            <Button onClick={handleRestart} data-testid="btn-playAgain">
              Restart
            </Button>
          </Grid>
        </>
      )}

      {!cards.length ? (
        <Grid
          container
          alignItems="center"
          direction="column"
          className={classes.btnAll}
        >
          <Typography
            data-testid="sub-title"
            m={2}
            textAlign="center"
            variant="h5"
          >
            Flip and Match to Win! Find all the pairs in the least moves
            possible!
          </Typography>
          <Typography
            data-testid="sub-title"
            m={2}
            textAlign="center"
            variant="h5"
          >
            Choose a level:
          </Typography>
          <Button
            data-testid="btn-easy"
            onClick={() => handleDifficultyLevel("easy")}
          >
            Easy
          </Button>
          <Button
            data-testid="btn-medium"
            onClick={() => handleDifficultyLevel("medium")}
          >
            Medium
          </Button>
          <Button
            data-testid="btn-hard"
            onClick={() => handleDifficultyLevel("hard")}
          >
            Hard
          </Button>
        </Grid>
      ) : (
        <Grid
          container
          alignItems="center"
          direction="row"
          justifyContent="center"
        >
          {cards.map((card) => (
            <Card
              data-testid="cards"
              key={card.id}
              card={card}
              handleCardClick={handleCardClick}
            />
          ))}
        </Grid>
      )}
    </>
  );
}

export default App;
