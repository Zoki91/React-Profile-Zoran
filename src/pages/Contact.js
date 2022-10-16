import React from "react";
import ContactForm from "../components/ContactForm";
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Contact Me</h1>
      </div>
      <div className="contact-container">
        <ContactForm />
      </div>
    </div>
  );
}
export default Contact;
