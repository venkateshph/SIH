import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import './Canvas.css';
import TaskList from './TaskList';

const Canvas = ({ components = [], onDrop, onRemove, onSelect, waterParticles, onAddWaterParticles }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'COMPONENT',
    drop: (item, monitor) => onDrop(item, monitor),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));


  
  return (
    <div ref={drop} className={`canvas ${isOver ? 'canvas-over' : ''}`}>
      <p style={{"color":"Black","opacity": 0.5, "fontStyle":"oblique"}}>Layout</p>
      
      {/* Render components */}
      {components.map((comp) => (
        <div
          key={comp.id}
          className="dropped-component"
          style={{
            left: `${comp.position.x}px`,
            top: `${comp.position.y}px`,
          }}
          onClick={() => onSelect(comp)}
        >
          <img
            src={`https://images.ctfassets.net/3s5io6mnxfqz/4TV7YTCO1DJuMhhn7RD1Ol/b5a6c12340e6529a86bc1b557ed2d8f8/AdobeStock_136921602.jpeg?fm=jpg&w=1200&fl=progressive`}
            alt={comp.type}
            className="dropped-icon"
          />
          <button className="remove-button" onClick={() => onRemove(comp.id)}>
            Remove
          </button>
        </div>
      ))}

      {/* Render water particles */}
      

      {/* Water button to add particles */}
      <button className="water-button" onClick={onAddWaterParticles}>
        Add Water
      </button>
    </div>
  );
};

export default Canvas;
