import React from 'react';
import './contact.css'; // Import the custom CSS file

const Contact = () => {
  return (
    <div className="container">
      <h1>Reach out to me:</h1>
      <div className="Contacts">
        <label>E-mail:</label>
        <a href="mailto:arjunkkirde@mail.com">arjunkkirde@gmail.com</a>
        <div id="sticky">
          <a href="https://api.whatsapp.com/send?phone=7743942668" target="_blank" rel="noreferrer">
            <img src="/images/whatsapp.png" alt="WhatsApp Icon" width="30" height="30" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
