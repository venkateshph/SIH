import React from 'react';
import { useLocation } from 'react-router-dom';
import './CropDetails.css'; // Import CSS for styling

const CropDetails = () => {
  const location = useLocation();
  const { crop } = location.state;

  return (
    <div className="crop-details">
      <h2>{crop.name}</h2>
      <p>{crop.description}</p>
      <button className="btn">Plant {crop.name}</button>
    </div>
  );
};

export default CropDetails;
