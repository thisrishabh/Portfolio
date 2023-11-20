// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = ({ activeLink }) => {
  return (
    <nav id="navbar" className="navbar container-fluid row mb-5">
    
     <div className="col navbar-brand text-center">
        <span>Rishabh Kumar Maurya</span>
      </div>
      <div className='col text-center'>
      <ul>
      
        <li className={activeLink === '/' ? 'nav-link active' : 'nav-link'}>
          <Link to="/">Home</Link>
        </li>
        <li className={activeLink === '/about' ? 'nav-link active' : 'nav-link'}>
          <Link to="/about">About</Link>
        </li>
        {/* Other links */}
        <li className={activeLink === '/resume' ? 'nav-link active' : 'nav-link'}>
          <Link to="/resume">Resume</Link>
        </li>
        <li className={activeLink === '/portfolio' ? 'nav-link active' : 'nav-link'}>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className={activeLink === '/contact' ? 'nav-link active' : 'nav-link'}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
