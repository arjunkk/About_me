import React from 'react';
import WellsFargocertificate from './WellsFargoCert';
import CognizantCertificate from './CognizantCert';
import Ciscocertificate from './Cisco';
import NptelDNWCertificate from './Nptel';

const Certifications = () => {
    return (
      <div class="flexCertificate">
        <WellsFargocertificate />
        <CognizantCertificate />
        <Ciscocertificate />
        <NptelDNWCertificate />
      </div>
    );
  };
  
  export default Certifications;