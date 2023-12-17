import React from 'react';

function ContactPage() {
  return (
    <div>
      <h1>Contact Me</h1>
      <form>
        <input type="text" placeholder="Subject" /><br />
        <input type="email" placeholder="Email" /><br />
        <textarea placeholder="Your Message"></textarea><br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;
