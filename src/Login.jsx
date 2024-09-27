import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import "./Navbar"
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add authentication logic here
    console.log('Logging in with:', { username, password });
    
    // Navigate to home page on successful login
    navigate('/home');
  };

  return (
    <>
    
    <div className="login-container">
      
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
    </>
    
  );
};

export default Login;
