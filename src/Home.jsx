import React, { useState } from 'react';
import CropManagement from './CropManagement'; // Import CropManagement
import './Home.css';

const Home = () => {
  const [showCropManagement, setShowCropManagement] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true); // State to control button visibility

  const handleManageCrops = () => {
    setShowCropManagement(true);
    setButtonVisible(false); // Hide the button when clicked
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>INI VAYAL 🪴</h1>
        <p>Grow your virtual farm and connect with nature!</p>
        {buttonVisible && ( // Conditionally render the button
          <button className="btn" onClick={handleManageCrops}>
            Start Your Jounery 👆
          </button>
        )}
      </div>
      {showCropManagement && <CropManagement />}
      
    </div>
  );
};

export default Home;
