import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h2>Contact Form</h2>
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone" required />
        <button type="submit" className="btn-add-contact">Add Contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
