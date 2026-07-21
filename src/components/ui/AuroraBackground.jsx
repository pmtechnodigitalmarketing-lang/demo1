import React from 'react';

const AuroraBackground = () => {
  return (
    <div className="aurora-bg">
      <div className="aurora-blob aurora-blob-1"></div>
      <div className="aurora-blob aurora-blob-2"></div>
      <div className="aurora-blob aurora-blob-3"></div>
      
      {/* Stars overlay - pure css stars */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-screen pointer-events-none z-0"></div>
    </div>
  );
};

export default AuroraBackground;
