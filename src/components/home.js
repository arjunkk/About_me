import Greeting from './greeting';
// const react = require('react');
// const reactDom = require('react-dom');
import ProfilePhoto from './ProfilePhoto';
import ResumeDownload from './ResumeDownload';

const Home = () => {
    return (
        <div>
            <Greeting />
            <h1>Hey! Arjun here.</h1>
            <h3>Let's traverse through my Profile.</h3>
            <ProfilePhoto />
            <ResumeDownload />
        </div >
    )
}

export default Home;