import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import AboutMeInformation from "./AboutMeInformation";
import AboutMeSkills from "./AboutMeSkills";

function AboutMe() {
  return (
    <Container className="body_container" maxWidth="lg">
      <Typography className="header" variant="h3">
        About Me.
      </Typography>
      <Grid container spacing={10}>
        <Grid item sm={12} md={6}>
          <AboutMeInformation />
        </Grid>
        <Grid
          item
          sm={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AboutMeSkills />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutMe;
