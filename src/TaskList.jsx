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
      </ul>
    </div>
  );
};

export default TaskList;
