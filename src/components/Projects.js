import { Container, Typography } from "@mui/material";
import React from "react";
import "./../css/carousel.css";
import CarouselBox from "./CarouselBox";

function Projects() {
  return (
    <Container
      id="Projects"
      className="body_container third_row reveal"
      maxWidth="lg"
      spacing={4}
    >
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
