import React, { useState } from 'react';
import { TextField, Checkbox, Button } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subscribe: false,
  });

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank you for contacting us 😊');
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have questions or feedback? We'd love to hear from you! Feel free to reach out to us using the contact information provided below.
      </p>
      <div className="contact-info">
        <p>Email: info@eduspark.com</p>
        <p>Phone: +64273038205</p>
        <p>Address: 236, View Road, Papakura, New Zealand</p>
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Your Name"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Your Email"
          variant="outlined"
          type="email" // Set type attribute to "email" for email validation
          value={formData.email}
          onChange={handleChange}
          required // Add required attribute for mandatory input
        />
        <TextField
          fullWidth
          id="message"
          name="message"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          value={formData.message}
          onChange={handleChange}
        />
        <FormControlLabel
          control={
            <Checkbox
              id="subscribe"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
            />
          }
          label="Subscribe to newsletter"
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Contact;
