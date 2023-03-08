import { Grid } from "@mui/material";
import { useCardStyles } from "./Card.style";
import { CardType } from "../App";

type CardProps = {
  card: CardType;
  handleCardClick: (card: CardType) => void;
};

export const Card = ({ card, handleCardClick }: CardProps) => {
  const classes = useCardStyles();

  return (
    <Grid
      container
      item
      alignItems="center"
      data-testid="my-card"
      direction="row"
      justifyContent="center"
      key={card.id}
      onClick={() => handleCardClick(card)}
      className={`${classes.card} ${
        card.isFlipped || card.isMatched
          ? classes.frontDesign
          : classes.backDesign
      }`}
    >
      {card.isFlipped || card.isMatched ? card.design : null}
    </Grid>
  );
};
