import * as React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

function Experience() {
  return (
    <Box>
      <Typography variant="h2">Experience</Typography>
      <Card>{workExperience}</Card>
      <Card>{workExperience}</Card>
      <Card>{workExperience}</Card>
    </Box>
  );
}

const workExperience = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Job Title
      </Typography>
      <Typography variant="body2">
        Job Description
        <br />
        Job Description
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default Experience;
