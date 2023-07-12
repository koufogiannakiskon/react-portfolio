import { Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";

function ContactForm() {
  return (
    <Paper component="form" className="contact_form_container" elevetion={6}>
      <Typography className="contact_form_paragraph">
        Feel free to contact me by submitting the form below and I will get back
        to you as soon as possible.
      </Typography>
      <TextField
        id="name"
        label="Name"
        variant="standard"
        margin="dense"
        required
      />
      <TextField
        id="email"
        label="Email"
        variant="standard"
        margin="dense"
        required
      />
      <TextField
        id="message"
        label="Message"
        multiline
        rows={4}
        variant="standard"
        margin="dense"
        required
      />
      <Button variant="contained" sx={{ backgroundColor: "#B6D2C5" }}>
        Send
      </Button>
    </Paper>
  );
}

export default ContactForm;
