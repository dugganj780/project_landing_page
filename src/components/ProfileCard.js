import React from "react";
import ProfileImage from "./images/HandBookImage.jpg";
import { Paper, Avatar, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  paper: {
    margin: 2,
    padding: 5,
    height: "40vh",
    alignSelf: "center",
    justifySelf: "center",
    justifyContent: "center",
    overflow: "auto",
    overflowX: "hidden",
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

export default function ProfileCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container direction="row" alignItems="center">
        <Grid item xs={4}>
          <Avatar
            alt="James Duggan"
            src={ProfileImage}
            sx={{ width: 200, height: 200 }}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6">James Duggan</Typography>
          <Typography variant="subtitle1">06357628</Typography>
          <Typography paragraph>
            TourPal is a web app and mobile app that allow users to create audio
            walking tours and take them respectively. The tour creator will use
            the web app to create destinations, each assigned their own audio
            recording, and combine these into a tour. The tourist then takes the
            tour on the mobile app.
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
