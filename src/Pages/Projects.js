import * as React from "react";
import {
  Box,
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
      <Card>{project}</Card>
      <Card>{project}</Card>
    </Box>
  );
}

const project = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Project
      </Typography>
      <Typography variant="body2">well meaning and kindly.</Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default Projects;
