import React from 'react';
import { Link } from 'react-router-dom';

const Team = ({ isFixed }) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-secondary py-3 fixed-top ${isFixed  === true ? 'stick' : 'transparent'}`}>
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src="../../../assets/images/acoo.png" alt="" className="img-fluid" style={{width: '200px'}} />
            {/* a & co consulting */}
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
                {/* 914616 */}
              {/* <li className="nav-item">
                <Link to="/" className="active nav-link fs-18 black font-weight-light">Home</Link>
              </li> */}
              <li className="nav-item">
                <Link to="/whoweare" className="nav-link fs-18 white font-weight-light">Who we are</Link>
              </li>
              <li className="nav-item">
                <Link to="whatwedo" className="nav-link fs-18 white font-weight-light">What we do</Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/team" className="nav-link fs-18 white font-weight-light">Team</Link>
              </li> */}
              {/* <li className="nav-item">
                <Link href="portfolio.html" className="nav-link fs-18 white font-weight-light">Portfolio</Link>
              </li> */}
              {/* <li className="nav-item">
                <Link href="about-us.html" className="nav-link fs-18 black font-weight-light">About-Us</Link>
              </li> */}
              <li className="nav-item">
                <Link to="/contact" className="nav-link fs-18 white font-weight-light">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Team
