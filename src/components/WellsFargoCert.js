import React from 'react';
import WellsFargocertificate from './images/Wells_Fargo.png'; // Relative path to the image
import './Certificates.css'; // Import the CSS file

const certificate = () => {
  return (
    <div className="profile-photo-container">
      <span><a href='https://drive.google.com/file/d/11i6Sqc3f4DPJHsBwMZ6TfpQdxUy2ZFKS/view?usp=sharing'><img src={WellsFargocertificate} alt="Profile" className="certificate-photo" /></a></span>
    </div>
  );
};

export default certificate;
