import logo from "./logo.svg";
import "./App.css";
import { Box, Divider, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  paper: {
    margin: 2,
    padding: 5,
    alignSelf: "center",
    justifySelf: "center",
    justifyContent: "center",
  },
  button: {
    width: "30%",
    alignSelf: "center",
    padding: 2,
    margin: 2,
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Paper className={classes.paper} elevation={8}>
          <Stack spacing={4} alignContent="center">
            <Typography variant="h3" align="center">
              James Duggan, 06357628
            </Typography>
            <Typography variant="h4" align="center">
              TourPal: A walking tour app built in React and React Native
            </Typography>
            <Divider />
            <Button
              variant="contained"
              className={classes.button}
              href="https://github.com/dugganj780/walking-tour-web"
            >
              Go to Web App Repository
            </Button>
            <Button
              variant="contained"
              className={classes.button}
              href="https://github.com/dugganj780/walking_tour_mobile"
            >
              Go to Mobile App Repository
            </Button>
            <Button variant="contained" className={classes.button}>
              Go to Project Video
            </Button>
            <Button variant="contained" className={classes.button}>
              <a href="./Duggan_James_06357628_Final_Report.docx" download>
                Download Project Report
              </a>
            </Button>
            <Button
              variant="contained"
              className={classes.button}
              href="https://floating-plateau-29115.herokuapp.com/"
            >
              Go to TourPal Web App
            </Button>
          </Stack>
          <Divider />

          <Typography variant="body1">
            To use the mobile app you will need to download the ExpoGo app for
            your mobile device and scan the QR code at the following link:
          </Typography>
          <a href="https://expo.dev/@jamesduggan/walking_tour_mobile">
            <Typography align="center">
              https://expo.dev/@jamesduggan/walking_tour_mobile
            </Typography>
          </a>
        </Paper>
        <Grid item xs={2} />
      </Grid>
    </Grid>
  );
}

export default App;
