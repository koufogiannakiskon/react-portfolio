import { Container, Typography } from "@mui/material";
import React from "react";
import "./../carousel.css";
import CarouselBox from "./CarouselBox";

function Projects() {
  return (
    <Container className="body_container third_row" maxWidth="lg" spacing={4}>
      <Typography className="header" variant="h3">
        Projects.
      </Typography>
      <Typography>
        Here are some of the personal projects, created while learning new
        Programming languages and libraries.
      </Typography>
      <CarouselBox />
    </Container>
  );
}

export default Projects;
