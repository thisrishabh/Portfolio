import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from '../Navbar/Navbar.jsx'
import '../Home/home.css'
import { useLocation } from 'react-router-dom'

const Resume = () => {
    const location = useLocation();
  return (
    <>
    <Navbar  activeLink={location.pathname}/>
        
      <div className='section'>
        <div className="container resume">

          <div className="section-title">
            <h2>Resume</h2>
            <p>Check My Resume</p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h4>Rishabh Kumar Maurya</h4>
                <p><em> A Software Developer with entry-level experience specializing in user interface design, application development, data security, and continuous improvement. Adept at identifying opportunities to enhance the user experience and develop new features to improve app functionality.</em></p>

                <ul>
                  <li>Bengaluru, Karnataka</li>
                  <li>+91 8112740196</li>
                  <li>rishabhmaurya0205@gmail.com</li>
                </ul>

              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Bachelor of Technology </h4>
                <h5>2019 - 2023</h5>
                <p><em>Shri Ram Institute of Technology, Jabalpur, M.P.</em></p>
                <p>CGPA - 8.4</p>
              </div>
              <div className="resume-item">
                <h4>Intermediate (XII)</h4>
                <h5>2018 - 2019</h5>
                <p><em>Aditya Birla Intermediate College, Renukoot, U.P.</em></p>
                <p>Percentage - 70%</p>
              </div>
              <div className="resume-item">
                <h4>Highschool (X)</h4>
                <h5>2016 - 2017</h5>
                <p><em>Aditya Birla Intermediate College, Renukoot, U.P.</em></p>
                <p>Percentage - 84.33%</p>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Software Engineer Traniee</h4>
                <h5>2023 - Present</h5>
                <p><em>Bengaluru, Karnataka</em></p>

                <ul>
                  <li>Developed foundational knowledge in programming languages such as Node.js, MongoDB, ReactJs, Express, Strapi, Ionic applying them to various projects and assignments.</li>
                  <li>Assisted senior engineers in software development tasks, including debugging, testing, and code review processes. </li>
                  <li>Gained insight into the software development lifecycle, from concept to deployment, improving understanding of project management and agile methodologies.</li>
                  <li>Received mentorship and guidance from experienced professionals, actively contributing to team objectives and learning valuable problem-solving techniques.</li>
                </ul>

              </div>
              <h3 className="resume-title">Achievements</h3>
              <div className="resume-item">
                <h4>Smart India Hackathon</h4>
                <h5>2022</h5>
                <p><em>Grand Finale - Hyderabad</em></p>

                <ul>
                  <li>National Level 36 Hours Hackathon conducted by MHRD. </li>
                  <li>I worked with 6 Team members.</li>
                  <li>Created Link Smart Document Capture System.</li>
                  <li>Worked On Link : Python, HTML, CSS, Firebase, FastApi</li>
                </ul>

              </div>
            </div>
          </div>

        </div>
        </div>
     
    </>
  )
}

export default Resume