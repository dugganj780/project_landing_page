import * as React from "react";
import { Paper } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { makeStyles } from "@mui/styles";
import Screenshot01 from "./images/Screenshot_20220403-104313.png";
import Screenshot02 from "./images/Screenshot_20220403-104326.png";
import Screenshot03 from "./images/Screenshot_20220403-104338.png";
import Screenshot04 from "./images/Screenshot_20220403-104345.png";
import Screenshot05 from "./images/Screenshot_20220403-104401.png";
import Screenshot06 from "./images/Screenshot_20220403-104415.png";

const useStyles = makeStyles({
  paper: {
    margin: 2,
    padding: 5,
    height: "50vh",
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

export default function ProjectImageList() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <ImageList
        sx={{ width: "100%", height: "90%" }}
        cols={3}
        variant="woven"
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Paper>
  );
}

const itemData = [
  {
    img: Screenshot01,
    title: "Mobile App Image",
  },
  {
    img: Screenshot02,
    title: "Mobile App Image",
  },
  {
    img: Screenshot03,
    title: "Mobile App Image",
  },
  {
    img: Screenshot04,
    title: "Mobile App Image",
  },
  {
    img: Screenshot05,
    title: "Mobile App Image",
  },
  {
    img: Screenshot06,
    title: "Mobile App Image",
  },
];
