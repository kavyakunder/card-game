import { makeStyles } from "@mui/styles";

export const useAppStyles = makeStyles({
  btnContainer: {
    "& .MuiButtonBase-root": {
      backgroundColor: "#DA715B",
      color: "#ffffff",
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
