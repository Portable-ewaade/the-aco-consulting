import React from 'react';
import { Link } from 'react-router-dom';

const Team = ({ isFixed }) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-secondary py-3 fixed-top ${isFixed  === true ? 'stick' : 'transparent'}`}>
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src="../../../assets/images/a-&-co-consulting-logo(colored).png" alt="" className="img-fluid" style={{width: '200px'}} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link fs-15 black font-weight-medium">About us</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link fs-15 black font-weight-medium">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className="nav-link fs-15 black font-weight-medium">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Team
