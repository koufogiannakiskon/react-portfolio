import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

function HomeInformation() {
  return (
    <div sx={{ display: "flex" }}>
      <Typography className="hello_world" variant="h3">
        Hello World!
      </Typography>
      <Typography className="introduce" variant="h5">
        My name is
      </Typography>
      <Typography className="my_name" variant="h2">
        <span className="first_name">Konstantinos&nbsp; </span>
        <span className="last_name">Koufogiannakis</span>
      </Typography>
      <Typography className="h3_faded" variant="h3">
        I love to build things for the web.
      </Typography>
      <Grid item xs={8}>
        <Typography paragraph className="short_sum">
          My role is to write and style the front-end components creating
          beautiful digital experiences. Currently, I'm focused on acquiring new
          skills in Web development.
        </Typography>
        <Button className="resumeButton" variant="contained" disabled>
          Resume <LockIcon />
        </Button>
      </Grid>
    </div>
  );
}

export default HomeInformation;
