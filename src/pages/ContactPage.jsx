import React from 'react';
import NavBar from "../components/NavBar.jsx";

function ContactPage() {
  return (
    <div className="contact-container">
      <NavBar/>
      <h1>Contact Me</h1>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" placeholder="Subject" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" placeholder="Your Message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;