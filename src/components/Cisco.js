import React from 'react';
import WellsFargocertificate from './images/cisco.png'; // Relative path to the image
import './Certificates.css'; // Import the CSS file

const certificate = () => {
  return (
    <div className="profile-photo-container">
      <span><a href='https://www.credly.com/badges/b9e7f886-ac45-430d-bb92-8b73f9befb56/public_url'><img src={WellsFargocertificate} alt="Profile" className="certificate-photo" /></a></span>
    </div>
  );
};

export default certificate;
