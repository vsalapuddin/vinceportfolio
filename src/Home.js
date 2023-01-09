import * as React from "react";
import "./Home.css";
import { Grid } from "@mui/material";

import Intro from "./Pages/Intro";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";

function Home() {
  return (
    <Grid container flexDirection="column" alignText="center" spacing={8}>
      <Grid item>
        <Intro />
      </Grid>
      <Grid item>
        <Experience />
      </Grid>
      <Grid item>
        <Projects />
      </Grid>
    </Grid>
  );
}

export default Home;
