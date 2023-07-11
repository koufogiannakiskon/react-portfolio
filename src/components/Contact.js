import { Container, Grid, Typography } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <Container className="body_container fourth_row third_row" maxWidth="lg">
      <Typography className="header" variant="h2">
        Contact Me.
      </Typography>
      <Grid container spacing={4}>
        <Grid item sm={6}>
          <Typography>Getting in touch is easy!</Typography>
          <div className="contact_carousel">
            <a
              href="mailto:koufogiannakiskon@gmail.com"
              aria-label="Email"
              target="_blank"
              rel="noreferrer"
            >
              <li className="email contact_info">
                <i className="fa-regular fa-envelope-open email fa-3x"></i>
                &nbsp; koufogiannakiskon@gmail.com
              </li>
            </a>
            <a
              href="https://linkedin.com/in/koufogiannakiskon"
              aria-label="Linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <li className="linkedin contact_info">
                <i className="fa-brands fa-linkedin fa-3x"></i>
                &nbsp; /koufogiannakiskon
              </li>
            </a>
            <a
              href="https://github.com/koufogiannakiskon"
              aria-label="Github"
              target="_blank"
              rel="noreferrer"
            >
              <li className="github contact_info">
                <i className="fa-brands fa-github fa-3x"></i>
                &nbsp; /koufogiannakiskon
              </li>
            </a>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
