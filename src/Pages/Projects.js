import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

function Projects() {
  return (
    <Box>
      <Typography variant="h2">Projects</Typography>
      <Grid container>
        <Card>{project}</Card>
        <Card>{project}</Card>
      </Grid>
    </Box>
  );
}

const project = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Project
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default Projects;
