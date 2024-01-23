import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ReactGA from "react-ga4";

import './App.css';

import Nav from './components/Nav';
import Home from './components/home';
import Education from './components/education';
import Skills from './components/skills';
import Projects from './components/projects';
import Certifications from './components/Certifications'
import Contact from './components/contact';
import Footer from './components/Footer';
import NgoColab from './components/Projects/NgoColab';
import WorkerEmployability from './components/Projects/WorkerEmployability';
import PortfoliUsingReact from './components/Projects/PortfoliUsingReact';
import WaterMonitoringSystem from './components/Projects/WaterMonitoringSystem';

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize('G-6C442RVEVX');
    // Track initial pageview
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Certifications' element={<Certifications />} />
          <Route path='/Education' element={<Education />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/Projects/NgoColab' element={<NgoColab />} />
          <Route path='/Projects/WorkerEmployability' element={<WorkerEmployability />} />
          <Route path='/Projects/PortfoliUsingReact' element={<PortfoliUsingReact />} />
          <Route path='/Projects/WaterMonitoringSystem' element={<WaterMonitoringSystem />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


// import './App.css';
// import {Routes,Route, BrowserRouter } from 'react-router-dom';
// // GA4 tracking
// import ReactGA from "react-ga4";
// ReactGA.initialize(G-6C442RVEVX);

// import Nav from './components/Nav';
// import Home from './components/home';
// import Education from './components/education';
// import Skills from './components/skills';
// import Projects from './components/projects';
// import Certifications from './components/Certifications'
// import Contact from './components/contact';
// import Footer from './components/Footer';
// import NgoColab from './components/Projects/NgoColab';
// import WorkerEmployability from './components/Projects/WorkerEmployability';
// import PortfoliUsingReact from './components/Projects/PortfoliUsingReact';
// import WaterMonitoringSystem from './components/Projects/WaterMonitoringSystem';

// function App() {
//   return (
//     <div className="App">
//     <BrowserRouter>
//     <Nav />
//     <Routes>
//         <Route path='/' element={<Home />}></Route>
//         <Route path='/Certifications' element={ <Certifications />}></Route>
//         <Route path='/Education' element={<Education />}></Route>
//         <Route path='/Projects' element={<Projects />}></Route>
//         <Route path='/Contact' element={<Contact />}></Route>
//         <Route path='/Skills' element={<Skills />}></Route>
//         <Route path='/Projects/NgoColab' element={<NgoColab />}></Route>
//         <Route path='/Projects/WorkerEmployability' element={<WorkerEmployability />}></Route>
//         <Route path='/Projects/PortfoliUsingReact' element={<PortfoliUsingReact />}></Route>
//         <Route path='/Projects/WaterMonitoringSystem' element={<WaterMonitoringSystem />}></Route>
//     </Routes> 
//     <Footer />
//     </BrowserRouter>
//     </div>
//   );
// }

// export default App;
