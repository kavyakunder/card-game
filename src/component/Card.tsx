import { Grid } from "@mui/material";
import { useCardStyles } from "./Card.style";
import { CardType } from "../App";
import { useMemo } from "react";

type CardProps = {
  card: CardType;
  handleCardClick: (card: CardType) => void;
};

export const Card = ({ card, handleCardClick }: CardProps) => {
  const classes = useCardStyles();

  const isFlippedOrMatched = useMemo(
    () => card.isFlipped || card.isMatched,
    [card.isFlipped]
  );

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
        className={
          isFlippedOrMatched ? classes.frontDesign : classes.backDesign
        }
      >
        {isFlippedOrMatched ? card.design : null}
      </Grid>
    </div>
  );
};
