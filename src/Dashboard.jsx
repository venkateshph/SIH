// Dashboard.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Forum from './Forum'; // Import the Forum component
import './Dashboard.css';
import FarmLevels from './FarmLevels';
import "./Navbar"
import Navbar from './Navbar';
const Dashboard = () => {
  const location = useLocation();
  const crop = location.state?.crop;

  return (
    
    <>
    <Navbar/>
    <div className="dashboard">
      
      {crop ? (
        <div className="dashboard-content">
          <div className="forum-container">
            <Forum /> {/* Forum on the left */}
          </div>
          <div className="crop-info-container">
            <h2 className="dashboard-title">{crop.name} Dashboard</h2>
            <div className="crop-info">
              
              <div className="crop-details">
                <p>{crop.description}</p>
                <h3>Statistics</h3>
                <ul>
                  <li>Growth Time: 3 months</li>
                  <li>Ideal Temperature: 20-30°C</li>
                  <li>Water Requirement: Moderate</li>
                </ul>
              </div>
            </div>
            <FarmLevels/>
          </div>
          
        </div>
      ) : (
        <div className="no-selection">Select a crop to view the dashboard.</div>
      )}
    </div>
    </>
  );
};

export default Dashboard;
