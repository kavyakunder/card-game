import { Grid } from "@mui/material";
import { useCardStyles } from "./Card.style";
import { CardType } from "../App";

type CardProps = {
  card: CardType;
  flippedCards: Array<CardType>;
  handleCardClick: (card: CardType) => void;
  matchedCards: Array<CardType>;
};

export const Card = ({
  card,
  flippedCards,
  handleCardClick,
  matchedCards,
}: CardProps) => {
  const classes = useCardStyles();

  return (
    <Grid
      container
      item
      alignItems="center"
      direction="row"
      justifyContent="center"
      key={card.id}
      onClick={() => handleCardClick(card)}
      className={`${classes.card} ${
        flippedCards.includes(card) || matchedCards.includes(card)
          ? classes.flippedDesign
          : classes.backDesign
      }`}
    >
      {flippedCards.includes(card) || matchedCards.includes(card)
        ? card.design
        : null}
    </Grid>
  );
};
