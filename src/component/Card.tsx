import { Grid } from "@mui/material";
import { useCardStyles } from "./Card.style";
import { CardType } from "../App";

type CardProps = {
  card: CardType;
  handleCardClick: (card: CardType) => void;
};

export const Card = ({ card, handleCardClick }: CardProps) => {
  const classes = useCardStyles();

  const flippedOrMatched = card.isFlipped || card.isMatched;
  return (
    <div className={classes.card}>
      <Grid
        container
        item
        alignItems="center"
        data-testid="my-card"
        direction="row"
        justifyContent="center"
        key={card.id}
        onClick={() => handleCardClick(card)}
        className={flippedOrMatched ? classes.frontDesign : classes.backDesign}
      >
        {flippedOrMatched ? card.design : null}
      </Grid>
    </div>
  );
};
