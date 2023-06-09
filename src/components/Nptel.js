import React from 'react';
import WellsFargocertificate from './images/NptelDNW.png'; // Relative path to the image
import './Certificates.css'; // Import the CSS file

const certificate = () => {
  return (
    <div className="profile-photo-container">
      <span><a href='https://drive.google.com/file/d/1Drlv9pgeFThK2rAWo8mLS1leGJwQDLN0/view?usp=sharing'><img src={WellsFargocertificate} alt="Profile" className="certificate-photo" /></a></span>
    </div>
  );
};

export default certificate;
