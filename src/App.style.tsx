import { makeStyles } from "@mui/styles";

export const useAppStyles = makeStyles({
  btnHard: {
    "& .MuiButtonBase-root": {
      backgroundColor: "#C34D69",
      color: "#fffff",
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
