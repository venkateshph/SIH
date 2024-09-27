import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import CropManagement from './CropManagement';
import Dashboard from './Dashboard';
import Simulation from './Simulation';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/manage-farm" element={<CropManagement/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path='/Simulation' element={<Simulation/>}/>
      </Routes>
    </Router>
  );
};

export default App;
