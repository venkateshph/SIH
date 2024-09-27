import React from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css'; // Import resizable styles
import './Inspector.css';

const Inspector = ({ component, onClose }) => {
  return (
    <Draggable>
      <div className="inspector">
        <ResizableBox
          width={300}
          height={150} // Adjust the height here
          minConstraints={[100, 100]} // Minimum width and height
          maxConstraints={[600, 300]} // Maximum width and height
          className="resizable-box"
        >
          <div className="inspector-content">
            
            <h3>Inspector<button className="close-button" onClick={onClose}>
              ×
            </button></h3>
            <p>Type:  {component.type}</p>
            <p>Position: ({component.position.x}, {component.position.y})</p>
            <p>Color: {component.color}</p>
          </div>
        </ResizableBox>
      </div>
    </Draggable>
  );
};

export default Inspector;
