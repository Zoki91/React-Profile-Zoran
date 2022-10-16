import React from "react";
import { TextField, Button } from "@mui/material";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <TextField
        variant="standard"
        helperText=""
        label="Name"
        fullWidth="true"
      />
      <TextField
        variant="standard"
        helperText=" "
        label="Email"
        fullWidth="true"
      />

      <TextField
        fullWidth="true"
        helperText=" "
        multiline="true"
        minRows="3"
        maxRows="12"
        label="Message"
      />
      <Button variant="outlined">Send</Button>

      {/* 
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl> */}
    </form>
  );
};

export default ContactForm;
