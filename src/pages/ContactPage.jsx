import { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contactpage.css'

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = 'service_h1b3wmg';
    const templateID = 'template_b9bt2pa';
    const myPublicKey = 'ueDzNgKv-cIkc0o_j';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Dylan',
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, myPublicKey)
      .then((response) => {
        console.log('Email sent successfully', response);
        setName(''),
        setEmail(''),
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error)
      });
      
  };

  const handleInputChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    // Update state based on input name
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check for required fields
    if (!name || !email || !message) {
      setErrorMessage('All fields are required');
      return;
    }

    // Validate email
    if (!validateEmail(email)) {
      setErrorMessage('Invalid email address');
      return;
    }

    // If everything is valid, submit the form
    alert(`Hello ${name}, your message has been submitted!`);
    // Clear form after successful submission
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div className="container text-center contact-container">
      <h1 className='contact-header'>Contact Us</h1>
      <form className="form" onSubmit={sendEmail}>
        <input
          type="text"
          value={name}
          name="name"
          onChange={handleInputChange}
          
          placeholder="Your Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Your Email"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          placeholder="Message"
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}