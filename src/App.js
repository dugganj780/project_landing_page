import logo from "./logo.svg";
import "./App.css";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  paper: {
    backgroundColor: "red",
    width: "80%",
    height: "80%",
  },
});

function App() {
  const classes = useStyles();

  return <Paper className={classes.paper}></Paper>;
}

export default App;
