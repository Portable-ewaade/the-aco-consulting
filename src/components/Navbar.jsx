import React from 'react'
import { Link } from 'react-router-dom'

const Team = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-secondary py-3 fixed-top">
        <div className="container">
          <Link href="index.html" className="navbar-brand">
            <img src="../../../assets/images/aco.png" alt="" className="img-fluid" style={{width: '200px'}} />
            {/* a & co consulting */}
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
                {/* 914616 */}
              <li className="nav-item">
                <Link href="#" className="nav-link fs-18 black font-weight-medium">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="who we are.html" className="nav-link fs-18 black font-weight-medium">Who we are</Link>
              </li>
              <li className="nav-item">
                <Link href="what we do.html" className="nav-link fs-18 black font-weight-medium">What we do</Link>
              </li>
              <li className="nav-item">
                <Link href="team.html" className="nav-link fs-18 black font-weight-medium">Team</Link>
              </li>
              <li className="nav-item">
                <Link href="portfolio.html" className="nav-link fs-18 black font-weight-medium">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link href="about-us.html" className="nav-link fs-18 black font-weight-medium">About-Us</Link>
              </li>
              <li className="nav-item">
                <Link href="contact-us.html" className="nav-link fs-18 black font-weight-medium">Contact-Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Team
