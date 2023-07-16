import { Container, Grid } from "@mui/material";
import React from "react";
import HomeInformation from "./HomeInformation";

function Home() {
  return (
    <Container id="Home" className="body_container" maxWidth="lg">
      <Grid container spacing={8}>
        <Grid item sm={12} md={7}>
          <HomeInformation />
        </Grid>
        <Grid
          item
          sm={12}
          md={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            className="my_image"
            src="images/pic.jpg"
            alt=""
            width="300vw"
            height="300vh"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
