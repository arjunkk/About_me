import React from 'react';

const WaterMonitoringSystemDownload = () => {
  const handleDownload = () => {
    const fileUrl = process.env.PUBLIC_URL + './Projects/WaterMonitoringSystem.pdf';
    window.open(fileUrl, '_blank');
  };

  return (
    <div>
      <button onClick={handleDownload}>Download WaterMonitoringSystem</button>
    </div>
  );
};

export default WaterMonitoringSystemDownload;
