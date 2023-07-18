import React from 'react';
import WellsFargocertificate from './WellsFargoCert';
import CognizantCertificate from './CognizantCert';
import Ciscocertificate from './Cisco';
import NptelDNWCertificate from './Nptel';
import './Certificates.css';

const Certifications = () => {
  return (
    <div className="certificates">
      <WellsFargocertificate className="certificate" />
      <CognizantCertificate className="certificate" />
      <Ciscocertificate className="certificate" />
      <NptelDNWCertificate className="certificate" />
    </div>
  );
};

export default Certifications;
