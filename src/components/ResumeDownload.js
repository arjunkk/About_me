import React,{useState} from 'react';

const ResumeDownload = () => {
  const handleDownload = () => {
    const fileUrl = process.env.PUBLIC_URL + '/RESUME_Arjun_K_Kirde.pdf';
    window.open(fileUrl, '_blank');
  };

  const [Download,setDownload]=useState(0)
  function updateDownloadCount(){
    setDownload(Download+1);
  }

  // Define the internal CSS styles as an object
  const resumeButton = {
    color: 'white',
    padding: '20px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '39px',
  };

  return (
    <div style={resumeButton} onClick={handleDownload}>
      {/* Apply the resumeButton styles object to the style attribute */}
      <button>
        <h1 onClick={updateDownloadCount}>Download Resume:{Download}</h1>
      </button>
    </div>
  );
};

export default ResumeDownload;
