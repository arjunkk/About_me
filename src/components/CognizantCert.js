import React from 'react';
import CognizantCertificate from './images/cognizant.png'; // Relative path to the image
import './Certificates.css'; // Import the CSS file

const Certificate = () => {
  return (
    <div className="profile-photo-container">
      <span><a href='https://drive.google.com/file/d/1CqYvm5nwB4QIlp4ZzOb2-Kqop-u-XmGi/view?usp=sharing'><img src={CognizantCertificate} alt="Profile" className="certificate-photo" /></a></span>
    </div>
  );
};

export default Certificate;
