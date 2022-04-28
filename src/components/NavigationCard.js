import React, { useRef, useState } from "react";
import Report from "../Duggan_James_06357628_Final_Report.docx";
import { Box, Divider, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

const useStyles = makeStyles({
  paper: {
    margin: 2,
    padding: 5,
    height: "85vh",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "80%",
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

export default function NavigationCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={8}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={1} />
        <Grid item xs={6}>
          <Stack spacing={4} alignContent="center">
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
            <Button
              variant="contained"
              className={classes.button}
              href="https://www.youtube.com/watch?v=Sm9z6cEyTsg"
            >
              Go to Project Video
            </Button>
            <Button variant="contained" className={classes.button}>
              <a href={Report} download>
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
        </Grid>
        <Grid item xs={1}>
          {" "}
          <Divider />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1">
            To use the mobile app you will need to download the ExpoGo app for
            your mobile device and scan the QR code at the following link:
          </Typography>
          <a href="https://expo.dev/@jamesduggan/walking_tour_mobile">
            <Typography align="center">
              https://expo.dev/@jamesduggan/walking_tour_mobile
            </Typography>
          </a>
        </Grid>
      </Grid>
    </Paper>
  );
}
