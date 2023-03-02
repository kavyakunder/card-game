import { makeStyles } from "@mui/styles";

export const useAppStyles = makeStyles((theme) => ({
  card: {
    alignItems: "center",
    border: "1px solid black",
    borderRadius: "10px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    height: "20rem",
    justifyContent: "center",
    margin: "5px",
    width: "12rem",
  },
}));
