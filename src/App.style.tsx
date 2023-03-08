import { makeStyles } from "@mui/styles";
// import { makeStyles } from "@material-ui/styles";

export const useAppStyles = makeStyles({
  btnHard: {
    "& .MuiButtonBase-root": {
      backgroundColor: "#C34D69",
      color: "white",
      margin: "1rem",
      padding: "0.5rem 1.5rem",
    },
  },
});
