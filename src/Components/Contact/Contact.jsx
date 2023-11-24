import React from 'react'
import { FaInstagram, FaLinkedin, FaMapMarkerAlt, FaShareAlt } from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { Link, useLocation } from 'react-router-dom'
import '../Home/home.css'
import Navbar from '../Navbar/Navbar.jsx'

const Contact = () => {
    const location = useLocation();
  return (
    <>
    <Navbar  activeLink={location.pathname}/>
        
           <div className='section'>
        <div className="container contact">

          <div className="section-title">
            <h2>Contact</h2>
            <p>Contact Me</p>
          </div>

          <div className="row mt-2">

            <div className="col-md-6 d-flex align-items-stretch">
              <div className="info-box">
                <FaMapMarkerAlt className='address-icon' />
                <h3>My Address</h3>

                <p>Btm 2nd Stage, Bengaluru, Karnataka</p>
              </div>
            </div>

            <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
              <div className="info-box">
                <FaShareAlt className='address-icon' />

                <h3>Social Profiles</h3>
                <div className="social-links">
                  <Link to="#" className="instagram link"><FaInstagram /></Link>
                  <Link to="#" className="linkedin link"><FaLinkedin /></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-4 d-flex align-items-stretch">
              <div className="info-box">
                <MdEmail className='address-icon' />
                <h3>Email Me</h3>
                <p>rishabhmaurya0205@gmail.com</p>
              </div>
            </div>
            <div className="col-md-6 mt-4 d-flex align-items-stretch">
              <div className="info-box">
                <MdCall className='address-icon' />
                <h3>Call Me</h3>
                <p>+91 8112740196</p>
              </div>
            </div>
          </div>

</div>

        </div>
      
    </>
  )
}

export default Contact