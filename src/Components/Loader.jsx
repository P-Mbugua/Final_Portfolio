import React from 'react';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="spinner"></div>
        <div className="logo">
          <i className="fas fa-cogs"></i> 
         
        </div>
        
        <p>Loading... Please wait.</p>
      </div>
    </div>
  );
};

export default Loader;
