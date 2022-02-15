import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import Content from "./components/Content";
import AboutMeGrid from "./components/card-components/AboutMeGrid";
import Game from "./components/game-component/Game";

function App() {
  return (
    <div className="App">
      <Grid container direction="column">
        <Header />
        <br></br>
        <br></br>
        <Grid item container>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <AboutMeGrid />
          </Grid>
          <Grid item xs={2} />
        </Grid>
        <br></br>
        <br></br>
        <Grid item container>
          <Grid item xs={3} />
          <Grid item xs={8}>
            <Content />
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <hr></hr>
      <Game />
    </div>
  );
}

export default App;
