import * as React from "react";
import "./Home.css";
import { Box, Grid } from "@mui/material";

import Intro from "./Pages/Intro";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";

function Home() {
  return (
    <Box>
      <Grid container direction="column" alignItems="center" spacing={8}>
        <Grid item>
          <Intro />
        </Grid>
        <Grid item>
          <Education />
        </Grid>
        <Grid item>
          <Experience />
        </Grid>
        <Grid item>
          <Projects />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
