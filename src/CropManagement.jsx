import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CropManagement.css';

const crops = [
  {
    id: 1,
    name: 'Wheat 🌾',
    description: 'Wheat is a cereal grain that is a staple food in many countries. It is used to make bread, pasta, and other foods.',
    image: 'https://www.agrifarming.in/wp-content/uploads/2019/07/How-to-Grow-Wheat-in-India.jpg'
  },
  {
    id: 2,
    name: 'Corn 🌽',
    description: 'Corn is a large grain plant first domesticated by indigenous peoples in southern Mexico about 10,000 years ago. It is used for food, feed, and fuel.',
    image: 'https://www.agrifarming.in/wp-content/uploads/2019/07/Corn-Plantation.jpg'
  },
  // ... other crops
  {
    id: 7,
    name: 'Cotton ',
    description: 'Cotton is a soft, fluffy staple fiber that grows in a protective case around the seeds of the cotton plant. It is widely used in the textile industry.',
    image: 'https://www.agrifarming.in/wp-content/uploads/2019/07/Cotton-Plantation.jpg'
  }
];

const CropManagement = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleCropSelect = (crop) => {
    navigate('/dashboard', { state: { crop } }); // Navigate with state
  };

  return (
    <div className="crop-management">
      <h2>Manage Your Crops</h2>
      <div className="crop-selection">
        {crops.map(crop => (
          <div key={crop.id} className="crop-card" onClick={() => handleCropSelect(crop)}>
            
            <h3>{crop.name}</h3>
            <p>{crop.description.substring(0, 50)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropManagement;
