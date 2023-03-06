import { makeStyles } from "@mui/styles";
export const useCardStyles = makeStyles((theme) => ({
  card: {
    alignItems: "center",
    backgroundPosition: "center",
    backgroundSize: "cover",
    border: "1px solid black",
    borderRadius: "10px",
    cursor: "pointer",
    display: "flex",
    fontSize: "5rem",
    height: "9rem",
    width: "14rem",
    justifyContent: "center",
    margin: "1rem 2.1rem",
  },

  flippedDesign: {
    backgroundColor: "#E8E5D9",
  },

  backDesign: {
    backgroundImage: `url(assets/card.png)`,
  },
}));
