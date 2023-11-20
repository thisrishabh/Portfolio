import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { Link } from 'react-router-dom'
import './home.css'
import { Waypoint } from 'react-waypoint';
import rishabh from './rishabh.png'
import { FaInstagram, FaLink, FaLinkedin, FaMapMarkerAlt, FaShareAlt } from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";


const Home = () => {

  const [refreshCount, setRefreshCount] = useState(0);

  // Function to handle automatic refresh
  const handleRefresh = () => {
    // Update the state to trigger a re-render
    setRefreshCount(prevCount => prevCount + 1);
    // You can perform other actions or state updates here as needed
  };

  // Set the interval for automatic refresh
  useEffect(() => {
    const interval = setInterval(() => {
      // Call the function to handle automatic refresh
      handleRefresh();
    }, 5000); // Refresh every 5 seconds (adjust the timing as needed)

    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, []);
  
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {https://chat.openai.com/
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with Link className name .scrollto
   */
  on('click', '#navbar .nav-link', function (e) {
    let section = select(this.hash)
    if (section) {
      e.preventDefault()

      let navbar = select('#navbar')
      let header = select('#header')
      let sections = select('section', true)
      let navlinks = select('#navbar .nav-link', true)

      navlinks.forEach((item) => {
        item.classList.remove('active')
      })

      this.classList.add('active')

      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }

      if (this.hash === '#header') {
        header.classList.remove('header-top')
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        return;
      }

      if (!header.classList.contains('header-top')) {
        header.classList.add('header-top')
        setTimeout(function () {
          sections.forEach((item) => {
            item.classList.remove('section-show')
          })
          section.classList.add('section-show')

        }, 350);
      } else {
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        section.classList.add('section-show')
      }

      scrollto(this.hash)
    }
  }, true)

  /**
   * Activate/show sections on load with hash links
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      let initial_nav = select(window.location.hash)

      if (initial_nav) {
        let header = select('#header')
        let navlinks = select('#navbar .nav-link', true)

        header.classList.add('header-top')

        navlinks.forEach((item) => {
          if (item.getAttribute('to') === window.location.hash) {
            item.classList.add('active')
          } else {
            item.classList.remove('active')
          }
        })

        setTimeout(function () {
          initial_nav.classList.add('section-show')
        }, 350);

        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function (direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }



  return (
    <>
      <header id="header">
        <div className="container">

          <h1><Link to="#">Rishabh Kumar Maurya</Link></h1>


          <h2>I'm a passionate <span>Software Engineer</span> from Bengaluru</h2>

          <nav id="navbar" className="navbar">
            <ul>
              <li><Link className="nav-link active" to="#header">Home</Link></li>
              <li><Link className="nav-link" to="#about">About</Link></li>
              <li><Link className="nav-link" to="#resume">Resume</Link></li>

              <li><Link className="nav-link" to="#portfolio">Portfolio</Link></li>
              <li><Link className="nav-link" to="#contact">Contact</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <div className="social-links">
            <Link to="#" className="instagram"><FaInstagram /></Link>
            <Link to="#" className="linkedin"><FaLinkedin /></Link>
          </div>

        </div>
      </header>
      <section id="about" className="about">


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
                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>10 Jan 2002</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>rishabhmaurya0205@gmail.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 812740196</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Bengaluru, Karnataka</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.Tech</span></li>

                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
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
      </section>

      <section id="resume" className="resume">
        <div className="container">

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
      </section>
      <section id="contact" className="contact">
        <div className="container">

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
                <p>+19 8112740196</p>
              </div>
            </div>
          </div>



        </div>
      </section>
      <section id="portfolio" className="portfolio">
        <div className="container">

          <div className="section-title">
            <h2>Portfolio</h2>
            <p>My Works</p>
          </div>

          <div className="row portfolio-container text-center">
            <div className="row my-5">
              <div className="col">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGzNp6UywOqRA-mEkCUo8ZTwjvigwisE8ic7xN4MT6mv_TXm3T__mk1lAAUaOz1CNRd5I&usqp=CAU" class="rounded" alt="..." />
                <div class='for-link d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100'>
                  <p class="text-center text-white m-0">Tourist Place</p>
                  <Link to="" class="text-white"><FaLink /></Link>
                </div>
                </div>
                <div className="col">
                  <img src="https://www.monsterinsights.com/wp-content/uploads/2019/11/breathtaking-online-shopping-statistics-you-never-knew-625x300.png" class="rounded" alt="..." />
                  <div class='for-link d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100'>
                  <p class="text-center text-white m-0">Shopping Hub</p>
                  <Link to="" class="text-white"><FaLink /></Link>
                </div>
                </div>
                <div className="col">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkM0Oc6cSexhfG81-2RSG7f4J21AzfqYrlpDe7OkStTqp5rFg19GJ8Cocwsud9zeZDkSg&usqp=CAU" class="rounded" alt="..." />
                  <div class='for-link d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100'>
                  <p class="text-center text-white m-0">Authentication & Authorization</p>
                  <Link to="https://github.com/thisrishabh/Athentication_Athorization" class="text-white"><FaLink /></Link>
                </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/216092999/original/7862140876acf1601399861b386804268c1079b6/clone-a-wordpress-or-website.png" class="rounded" alt="..." />
                  <div class='for-link d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100'>
                  <p class="text-center text-white m-0">Zool Clone Wensite</p>
                  <Link to="" class="text-white"><FaLink /></Link>
                </div>
                </div>
                <div className="col">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXTIwz8LFjt_Cwsj3IzjCpz-td3UDrleRxlBvge9ilJgguFWM4ai28yEYuiOwVuJqYcU0&usqp=CAU" class="rounded" alt="..." />
                  <div class='for-link d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100'>
                  <p class="text-center text-white m-0">Naveq</p>
                  <Link to="https://github.com/thisrishabh/NAVEQ" class="text-white"><FaLink /></Link>
                </div>
                </div>

              </div>
            </div>
          </div>
      </section>

    </>

  )
}

export default Home