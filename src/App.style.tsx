import { makeStyles } from "@mui/styles";

export const useAppStyles = makeStyles({
  btnLevels: {
    "& .MuiButton-root": {
      color: "#fffff !important",
      margin: "1rem",
      padding: "0.5rem 1.5rem",
      border: "1px solid black",
      backgroundColor: "#C34D69",
    },
  },
  btnHard: {
    backgroundColor: "#C34D69",
    // },
  },

  btnMedium: {
    "& .MuiButton-root": {
      backgroundColor: "#DA715B",
    },
  },
  btnEasy: {
    "& .MuiButton-root": {
      backgroundColor: "#E4A384",
      color: "#ffff",
      margin: "1rem",
      padding: "0.5rem 1.5rem",
    },
  },
  appHeader: {
    "& .MuiPaper-root": {
      backgroundColor: "#CE5876",
    },
  },
});
