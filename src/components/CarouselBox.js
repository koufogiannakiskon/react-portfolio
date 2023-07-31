import React from "react";
import { projectsItems } from "../utils/projectsArray";
import { Box, Container, Grid, Typography } from "@mui/material";
import "./../css/carousel.css";

function CarouselBox() {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ sm: 12, lg: 2, xl: 12 }}
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
        }}
      >
        {projectsItems.map((item) => (
          <Grid item md={6} lg={6} xl={3} key={item.name}>
            <Box className="box">
              <div className="imgBx">
                <img src={item.image} alt={item.name}></img>
              </div>
              <div className="content">
                <a
                  className="link_to_project"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <Typography className="project_name" variant="h3">
                      {item.name}
                    </Typography>
                    <Typography className="project_description">
                      {item.description}
                    </Typography>
                    <Typography>
                      <a
                        className="link_to_github"
                        href={item.githubUrl}
                        target="_blank"
                        aria-label="Github"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-github fa-2x"></i>
                      </a>
                    </Typography>
                  </div>
                </a>
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CarouselBox;
