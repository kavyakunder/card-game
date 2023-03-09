import { makeStyles } from "@mui/styles";
export const useCardStyles = makeStyles((theme) => ({
  card: {
    "& .MuiGrid-root": {
      alignItems: "center",
      backgroundPosition: "center",
      backgroundSize: "cover",
      border: "1px solid black",
      borderRadius: "10px",
      cursor: "pointer",
      display: "flex",
      fontSize: "5rem",
      height: "12rem",
      justifyContent: "center",
      margin: "10px 5rem",
      width: "10rem",
    },
  },

  frontDesign: {
    backgroundColor: "#E8E5D9",
  },

  backDesign: {
    backgroundImage: `url(assets/card.png)`,
  },
}));
