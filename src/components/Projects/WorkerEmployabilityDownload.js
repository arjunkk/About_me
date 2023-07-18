import React from 'react';

const WorkerEmployabilityDownload = () => {
  const handleDownload = () => {
    const fileUrl = process.env.PUBLIC_URL + './Projects/WorkerEmployability.pdf';
    window.open(fileUrl, '_blank');
  };

  return (
    <div>
      <button onClick={handleDownload}>Download WorkerEmployability</button>
    </div>
  );
};

export default WorkerEmployabilityDownload;
