import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { Link, useLocation } from 'react-router-dom'
import {  FaLink } from "react-icons/fa";
import Navbar from '../Navbar/Navbar.jsx'

import '../Home/home.css'

const Portfolio = () => {
    const location = useLocation();
  return (
    <>
    <Navbar  activeLink={location.pathname}/>
        
         <div className='section'>
        <div className="container portfolio-details">

          <div className="section-title">
            <h2>Portfolio</h2>
            <p>My Works</p>
          </div>

          <div className="row portfolio-container text-center">
            <div className="row my-5">
              <div className="col">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGzNp6UywOqRA-mEkCUo8ZTwjvigwisE8ic7xN4MT6mv_TXm3T__mk1lAAUaOz1CNRd5I&usqp=CAU" className="rounded" alt="..." />
                <div className='for-link d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100'>
                  <p className="text-center text-white m-0">Tourist Place</p>
                  <Link to="" className="text-white"><FaLink /></Link>
                </div>
                </div>
                <div className="col">
                  <img src="https://www.monsterinsights.com/wp-content/uploads/2019/11/breathtaking-online-shopping-statistics-you-never-knew-625x300.png" className="rounded" alt="..." />
                  <div className='for-link d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100'>
                  <p className="text-center text-white m-0">Shopping Hub</p>
                  <Link to="" className="text-white"><FaLink /></Link>
                </div>
                </div>
                <div className="col">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkM0Oc6cSexhfG81-2RSG7f4J21AzfqYrlpDe7OkStTqp5rFg19GJ8Cocwsud9zeZDkSg&usqp=CAU" className="rounded" alt="..." />
                  <div className='for-link d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100'>
                  <p className="text-center text-white m-0">Authentication & Authorization</p>
                  <Link to="https://github.com/thisrishabh/Athentication_Athorization" className="text-white"><FaLink /></Link>
                </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/216092999/original/7862140876acf1601399861b386804268c1079b6/clone-a-wordpress-or-website.png" className="rounded" alt="..." />
                  <div className='for-link d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100'>
                  <p className="text-center text-white m-0">Zool Clone Wensite</p>
                  <Link to="" className="text-white"><FaLink /></Link>
                </div>
                </div>
                <div className="col">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXTIwz8LFjt_Cwsj3IzjCpz-td3UDrleRxlBvge9ilJgguFWM4ai28yEYuiOwVuJqYcU0&usqp=CAU" className="rounded" alt="..." />
                  <div className='for-link d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100'>
                  <p className="text-center text-white m-0">Naveq</p>
                  <Link to="https://github.com/thisrishabh/NAVEQ" className="text-white"><FaLink /></Link>
                </div>
                </div>

              </div>
            </div>
          </div>
      
</div>
    </>
  )
}

export default Portfolio