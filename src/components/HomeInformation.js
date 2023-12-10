import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

function HomeInformation() {
  return (
    <div sx={{ display: "flex" }}>
      <Typography className="hello_world" variant="h3">
        Hello World!
      </Typography>
      <Typography className="text_mulish" variant="h5">
        My name is
      </Typography>
      <Typography className="my_name" variant="h2">
        <span className="first_name">Konstantinos&nbsp; </span>
        <span className="last_name">Koufogiannakis</span>
      </Typography>
      <Typography className="h3_faded" variant="h3">
        A passionate Front-end React Developer.
      </Typography>
      <Grid item xs={8}>
        <Typography paragraph className="short_sum">
          My role is to write and style the front-end components creating
          beautiful digital experiences. I am currently based in Athens, Greece.
          📍
        </Typography>
        <Button className="resumeButton" variant="contained" disabled>
          Resume <LockIcon />
        </Button>
      </Grid>
    </div>
  );
}

export default HomeInformation;
