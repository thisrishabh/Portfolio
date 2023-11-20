import React from 'react'
import rishabh from './rishabh.png'
import '../Home/home.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'

import '../Home/home.css'
import Navbar from '../Navbar/Navbar.jsx'
import { useLocation } from 'react-router-dom'


const About = () => {
    const location = useLocation();
  return (
    <>
    <Navbar  activeLink={location.pathname}/>
        
<div className='section'>


<div className="about-me container">

  <div className="section-title">
    <h2>About</h2>
    <p>Learn more about me</p>
  </div>

  <div className="row">
    <div className="col-lg-4" data-aos="fade-right">
      <img src={rishabh} className="img-fluid" alt="" />
    </div>
    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
      <h3>Software Engineer</h3>
      <p className="fst-italic">
        BE/BTech graduate with expert command over HTMl, CSS, JavaScript, React, Strapi & MongoDb. Fundamental understanding of bother Front-end and Back-end web development
      </p>
      <div className="row">
        <div className="col-lg-6">
          <ul>
            <li> <strong>Birthday:</strong> <span>10 Jan 2002</span></li>
            <li> <strong>Website:</strong> <span>rishabhmaurya0205@gmail.com</span></li>
            <li> <strong>Phone:</strong> <span>+91 812740196</span></li>
            <li> <strong>City:</strong> <span>Bengaluru, Karnataka</span></li>
          </ul>
        </div>
        <div className="col-lg-6">
          <ul>
            <li> <strong>Age:</strong> <span>22</span></li>
            <li><strong>Degree:</strong> <span>B.Tech</span></li>

            <li> <strong>Freelance:</strong> <span>Available</span></li>
          </ul>
        </div>
      </div>
      <p>
        A Software Developer with entry-level experience specializing in user interface design, application development, data security, and continuous improvement. Adept at identifying opportunities to enhance the user experience and develop new features to improve app functionality.
      </p>
    </div>
  </div>

</div>


<div className="skills container">

  <div className="section-title">
    <h2>Skills</h2>
  </div>

  <div className="row skills-content">

    <div className="col-lg-6">

      <div className="progress">
        <span className="skill">HTML <i className="val">100%</i></span>
        <div className="progress-bar-wrap">
          <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}></div>
        </div>
      </div>

      <div className="progress">
        <span className="skill">CSS <i className="val">90%</i></span>
        <div className="progress-bar-wrap">
          <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}></div>
        </div>
      </div>

      <div className="progress">
        <span className="skill">JavaScript <i className="val">75%</i></span>
        <div className="progress-bar-wrap">
          <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
        </div>
      </div>
      <div className="progress">
        <span className="skill">Mangodb<i className="val">80%</i></span>
        <div className="progress-bar-wrap">
          <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}></div>
        </div>
      </div>

    </div>

    <div className="col-lg-6">

      <div className="progress">
        <span className="skill">React<i className="val">70%</i></span>
        <div className="progress-bar-wrap">
          <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}></div>
        </div>
      </div>

      <div className="progress">
        <span className="skill">Node.js<i className="val">80%</i></span>
        <div className="progress-bar-wrap">
          <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}></div>
        </div>
      </div>

      <div className="progress">
        <span className="skill">Strapi (cms)<i className="val">80%</i></span>
        <div className="progress-bar-wrap">
          <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}></div>
        </div>
      </div>
      <div className="progress">
        <span className="skill">MERN Stack<i className="val">70%</i></span>
        <div className="progress-bar-wrap">
          <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}></div>
        </div>
      </div>


    </div>

  </div>

</div>
</div>

    </>
  )
}

export default About