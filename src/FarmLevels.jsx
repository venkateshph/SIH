import React, { useState } from 'react';
import './FarmLevels.css'; // Create this CSS file

const FarmLevels = () => {
    const [currentLevel, setCurrentLevel] = useState(0);
    
    const levels = [
        { name: "Level 1: Beginner Farm", description: "Start planting basic crops." },
        { name: "Level 2: Intermediate Farm", description: "Expand your farm with more crops." },
       
    ];

    const handleNextLevel = () => {
        if (currentLevel < levels.length - 1) {
            setCurrentLevel(currentLevel + 1);
        }
    };

    const handlePrevLevel = () => {
        if (currentLevel > 0) {
            setCurrentLevel(currentLevel - 1);
        }
    };

    return (
        <div className="farmLevels">
            <h2>{levels[currentLevel].name}</h2>
            <p>{levels[currentLevel].description}</p>
            <div className="navigation">
                <button onClick={handlePrevLevel} disabled={currentLevel === 0}>Previous Level</button>
                <button onClick={handleNextLevel} disabled={currentLevel === levels.length - 1}>Start 👆🌟</button>
            </div>
        </div>
    );
};

export default FarmLevels;
