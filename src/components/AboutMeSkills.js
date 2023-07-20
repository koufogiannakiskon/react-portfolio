import React from "react";
import { Grid, Typography } from "@mui/material";
import { skillsItems } from "../utils/skillsArray.js";
import "./../skills_styles.css";

function AboutMeSkills() {
  return (
    <Grid container spacing={2}>
      <Typography>
        Here are some of the Languages and Frameworks that I like to use.
      </Typography>

      {skillsItems.map((item) => (
        <Grid item xs={6} key={item.name}>
          <a
            href={item.link}
            aria-label={item.name}
            target="_blank"
            rel="noreferrer"
          >
            <li className={item.name}>
              {item.icon} {item.name}
            </li>
          </a>
        </Grid>
      ))}
    </Grid>
  );
}

export default AboutMeSkills;
