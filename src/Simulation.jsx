import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Toolbox from './Toolbox';
import Canvas from './Canvas';
import Inspector from './Inspector';
import TaskList from './TaskList'; // Import TaskList component
import './Simulation.css';
import Forum from './Forum'
const GRID_SIZE = 20;

const snapToGrid = (x, y) => {
  const snappedX = Math.round(x / GRID_SIZE) * GRID_SIZE;
  const snappedY = Math.round(y / GRID_SIZE) * GRID_SIZE;
  return { x: snappedX, y: snappedY };
};

const Simulation = () => {

  


  const [components, setComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Add cotton crop', completed: false },
    {id:2, description: 'Add water', completed: false}
    // Add more tasks as needed
  ]);

  const handleCloseInspector = () => {
    setSelectedComponent(null);
  };
  const handleDrop = (item, monitor) => {
    const delta = monitor.getClientOffset();
    const canvasElement = document.querySelector('.canvas');
    const canvasRect = canvasElement.getBoundingClientRect();

    const mouseX = delta.x - canvasRect.left;
    const mouseY = delta.y - canvasRect.top;

    const snappedPosition = snapToGrid(mouseX, mouseY);

    const newComponent = {
      id: Date.now(),
      type: item.type, // Make sure `item.type` is coming from the DnD item
      position: snappedPosition,
      color: 'brown', // Initial color
    };

    setComponents((prev) => [...prev, newComponent]);

    // Check if the task related to adding cotton is completed
    if (item.type === 'cotton') {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.description === 'Add cotton crop' ? { ...task, completed: true } : task
        )
      );
    }
    if (item.type === 'water') {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.description === 'Add water' ? { ...task, completed: true } : task
        )
      );
    }

    // Change color after 5 seconds
    setTimeout(() => {
      setComponents((prevComponents) =>
        prevComponents.map((component) =>
          component.id === newComponent.id
            ? { ...component, color: 'green' }
            : component
        )
      );
    }, 5000); // 5 seconds
  };

  const handleRemove = (id) => {
    setComponents((prevComponents) =>
      prevComponents.filter((component) => component.id !== id)
    );
    if (selectedComponent && selectedComponent.id === id) {
      setSelectedComponent(null);
    }
  };

  const handleSelect = (component) => {
    setSelectedComponent(component);
  };

  return (
   <>
    <div style={{"width":"50%", "height":"500px", "zIndex":"20"}}>
      <Forum/>
    </div>
     <DndProvider backend={HTML5Backend}>
     
      <div className="app-container">
        <Toolbox />
        <Canvas
          components={components}
          onDrop={handleDrop}
          onRemove={handleRemove}
          onSelect={handleSelect}
        />
        {selectedComponent && <Inspector onClose={handleCloseInspector} component={selectedComponent} />}
        <TaskList tasks={tasks} />
         {/* TaskList for displaying task status */}
      </div>
    </DndProvider>
    
   </>
  );
};

export default Simulation;
