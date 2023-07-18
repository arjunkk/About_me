import React from 'react';

const ResumeDownload = () => {
  const handleDownload = () => {
    const fileUrl = process.env.PUBLIC_URL + '/RESUME_Arjun_K_Kirde.pdf';
    window.open(fileUrl, '_blank');
  };

  return (
    <div>
      <button onClick={handleDownload}>Download Resume</button>
    </div>
  );
};

export default ResumeDownload;
