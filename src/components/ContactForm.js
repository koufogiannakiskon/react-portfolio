import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function ContactForm() {
  const isEmpty = (value) => value.trim() === "";
  const [answer, setAnswer] = useState("");

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: false,
    email: false,
    message: false,
  });

  // Function that runs every time an input changes
  const onBlurFunction = (event) => {
    const { id, value } = event.target;
    if (id === "name") {
      setFormInputsValidity({ ...formInputsValidity, [id]: isEmpty(value) });
    }
    if (id === "email") {
      setFormInputsValidity({
        ...formInputsValidity,
        [id]: !(value.includes("@") && value.includes(".")),
      });
    }
    if (id === "message") {
      setFormInputsValidity({
        ...formInputsValidity,
        [id]: isEmpty(value),
      });
    }
  };

  const formSubmission = (event) => {
    event.preventDefault();
    if (
      !formInputsValidity.email &&
      !formInputsValidity.name &&
      !formInputsValidity.message
    ) {
      setAnswer("Form Submitted");
    }
  };

  return (
    <Paper
      component="form"
      className="contact_form_container"
      elevetion={6}
      onSubmit={formSubmission}
    >
      <Typography className="contact_form_paragraph">
        Feel free to contact me by submitting the form below and I will get back
        to you as soon as possible.
      </Typography>
      <TextField
        id="name"
        className="textfield"
        label="Name"
        variant="standard"
        margin="dense"
        onBlur={(e) => onBlurFunction(e)}
        error={formInputsValidity.name}
        helperText={formInputsValidity.name ? "Please enter your name." : ""}
        required
      />
      <TextField
        id="email"
        className="textfield"
        label="Email"
        variant="standard"
        margin="dense"
        onBlur={(e) => onBlurFunction(e)}
        error={formInputsValidity.email}
        helperText={
          formInputsValidity.email ? "Please enter a valid email." : ""
        }
        required
      />
      <TextField
        id="message"
        className="textfield"
        label="Message"
        multiline
        rows={4}
        variant="standard"
        margin="dense"
        onBlur={(e) => onBlurFunction(e)}
        error={formInputsValidity.message}
        helperText={formInputsValidity.message ? "Please enter a message." : ""}
        required
      />
      <Button
        className="submitButton"
        type="submit"
        variant="contained"
        sx={{ backgroundColor: "#B6D2C5" }}
      >
        Send
      </Button>
      <Typography>{answer}</Typography>
    </Paper>
  );
}

export default ContactForm;
