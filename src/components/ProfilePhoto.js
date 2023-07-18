import React from 'react';
import profileImage from './images/Profile_new.jpg'; // Relative path to the image
import './ProfilePhoto.css'; // Import the CSS file

const ProfilePhoto = () => {
  return (
    <div className="profile-photo-container">
      <img src={profileImage} alt="Profile" className="profile-photo" />
    </div>
  );
};

export default ProfilePhoto;
