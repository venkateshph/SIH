import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="logo">INI VAIYAL</h1>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/levels">Farm Levels</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/help">Help</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
