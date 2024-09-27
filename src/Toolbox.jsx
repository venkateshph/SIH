import React from 'react';
import { useDrag } from 'react-dnd';
import './Toolbox.css';

const ComponentBox = ({ type, icon }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'COMPONENT',
    item: { type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`toolbox-item ${isDragging ? 'dragging' : ''}`}
    >
      
      <span>{type}</span>
    </div>
  );
};

const Toolbox = () => {
  return (
    <div className="toolbox">
      <h3>Items</h3>
      <ComponentBox type="cotton" />
      <ComponentBox type="water"  />
      <ComponentBox type="fertilizer"  />
      <h3>Tools ⚙️<button onClick={()=>{
        alert('Cotton production uses a lot of toxic, polluting chemicals,According to A New Textiles Economy Report, cotton production uses 2.5% of the world’s arable land, but accounts for 16% of all pesticides used. In India 50% of all pesticides are used for cotton production, with negative impacts on farmers’ health..')
      }}>📖</button></h3>
      
    </div>
  );
};

export default Toolbox;


