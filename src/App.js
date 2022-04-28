import "./App.css";
import Report from "./Duggan_James_06357628_Final_Report.docx";
import { Box, Divider, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import NavigationCard from "./components/NavigationCard";
import ProjectImageList from "./components/ProjectImageList";
import ProfileCard from "./components/ProfileCard";
import Image from "./components/images/map.png";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { createTheme } from "@mui/material/styles";

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
  container: {
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#04A777",
    },
    text: {
      primary: "#024F37",
      secondary: "#05C78D",
      disabled: "#06DB9B",
    },
    background: {
      paper: "#EFEAE6",
      default: "#EFEAE6",
    },
  },
  typography: {},
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Typography variant="h3" align="center">
          TourPal
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          A walking tour app built in React and React Native
        </Typography>
        <Grid container spacing={2} className={classes.container}>
          <Grid item xs={1} />
          <Grid item xs={5}>
            <ProfileCard />
            <ProjectImageList />
          </Grid>
          <Grid item xs={5}>
            <NavigationCard />
            <Grid item xs={1} />
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
