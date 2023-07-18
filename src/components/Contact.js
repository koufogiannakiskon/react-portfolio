import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <Container
      id="Contact"
      className="body_container fourth_row third_row reveal"
      maxWidth="lg"
    >
      <Grid container spacing={4}>
        <Grid item md={6}>
          <Typography className="header" variant="h2">
            Contact Me.
          </Typography>
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
        <Grid item md={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
