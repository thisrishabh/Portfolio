import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { Link } from 'react-router-dom'
import './home.css'

import { FaInstagram,  FaLinkedin} from "react-icons/fa";



const Home = () => {



  return (
    <>
      <header className="header">
        <div className="container">

          <h1><Link to="#">Rishabh Kumar Maurya</Link></h1>


          <h2>I'm a passionate <span>Software Engineer</span> from Bengaluru</h2>

          <nav id="navbar" className="navbar">
            <ul>
              <li><Link className="nav-link active" to="/" >Home</Link></li>
              <li><Link className="nav-link" to="/about">About</Link></li>
              <li><Link className="nav-link" to="/resume">Resume</Link></li>

              <li><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
              <li><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
            
          </nav>

          <div className="social-links">
            <Link to="#" className="instagram"><FaInstagram /></Link>
            <Link to="#" className="linkedin"><FaLinkedin /></Link>
          </div>

        </div>
      </header>
      
      
     
      
    </>

  )
}

export default Home