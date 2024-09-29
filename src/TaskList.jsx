import React, { useState } from 'react';
import Particles from 'react-tsparticles';
import './TaskList.css';

const TaskList = ({ tasks }) => {
  const [showParticles, setShowParticles] = useState(false);

  const handleTaskCompletion = (task) => {
    if (!task.completed) {
      // Set showParticles to true when a task is completed
      setShowParticles(true);
  
      // Hide particles after 3 seconds (adjust as needed)
      setTimeout(() => {
        setShowParticles(false);
      }, 3000);
    }
  };
  

  return (
    <div className="task-list">
      
        
     
      <h3>Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? 'completed' : ''}
            onClick={() => handleTaskCompletion(task)}
          >
            {task.description} - {task.completed ? 'Completed' : 'Pending'}
          </li>
        ))}
        <h3>Legends</h3>
        <img width={"60px"}  src='https://images.ctfassets.net/3s5io6mnxfqz/4TV7YTCO1DJuMhhn7RD1Ol/b5a6c12340e6529a86bc1b557ed2d8f8/AdobeStock_136921602.jpeg?fm=jpg&w=1200&fl=progressive'/><p>👆Cotton</p>
        <img width={"60px"}  src='https://www.growertoday.com/wp-content/uploads/2022/02/Low-Nitrogen-Fertilizer.jpg'/><p>👆Nitrogen (N)</p>
        <img width={"60px"}  src='https://th.bing.com/th/id/R.d998071b0aa9f55f0a5f203c0ed49218?rik=9Ep2QvUV%2bCwtxg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-jWhPrOCp9Go%2fT32MgnfjjzI%2fAAAAAAAABy0%2f8TeGZipp_J4%2fs1600%2fWater%2bSplash%2bWallpapers%2b4.jpg&ehk=pZQJQXTLJxc8lSoi2bwEQaN72gxAWcWOHOLbuBwTRVU%3d&risl=&pid=ImgRaw&r=0'/><p>👆Water</p>
      </ul>
    </div>
  );
};

export default TaskList;
