import React from 'react';
import Greeting from './greeting';
import ResumeDownload from './ResumeDownload';
import ProfilePhoto from './ProfilePhoto';
import './home.css'; // Import the custom CSS file

const Home = () => {
  return (
    <div className="container">
      <div>
        <div className="greeting">
          <Greeting />
        </div>
        <div className="title">
          Hey! Arjun here.
        </div>
        <div className="description">
          Let's traverse through my Profile.
        </div>
        <ResumeDownload />
      </div>
      <ProfilePhoto />
    </div>
  );
};

export default Home;
