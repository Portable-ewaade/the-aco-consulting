import React from 'react'
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="bg-grey2">
        <div className="ui-wrapper-medium">
          <div className="container">
            <div className="row ">
              <div className="col ">
                <div className='d-flex'> 
                <div>
                <Link to="/" className="navbar-brand">
            <img src="../../../assets/images/acoo.png" alt="" className="img-fluid" style={{width: '200px'}} />
            a & co consulting
                </Link>
          <p className='grey2 fs-13 pt-3 w-75'>A & co consulting is an innovation driven consultancy that harnesses the power of technology to provide sustainable and profitable solutions to clients world wide across various industries. We help organizations strategize, design, develop, implement and manage technological systems that drive revenue increase and growth to achieve goals.</p>

          <div className="d-flex white fs-11 social justify-content-between font-weight-xlight mt-4">
            <li> <a href="/">Facebook</a></li>
            <li> <a href="/">Twitter</a></li>
            <li> <a href="/">Instagram</a></li>
            
          </div>
                </div>

          <div>
              <div className="vertical-line grey2 d-flex ">
              <div className='details'>
              <li className="m-4">
                <Link to="/aboutus" className="
                 fs-12 white font-weight-medium">About Us</Link>
              </li>
              <li className='m-4'>
              <Link to="/services" className="
                 fs-12 white font-weight-medium">Services</Link>
              </li>
              <li className='m-4'>
              <Link to="/contactus" className="
                 fs-12 white font-weight-medium">Contact Us</Link>
              </li>
              </div>
              </div>

              </div>
          
          </div>
                <hr className='horizontal-line mt-5' />
            <div className='d-flex justify-content-between'>
            <div>
              <p className='white fs-10 font-weight-xlight'>&copy; <span className='m-2'>2023 A & Co Consulting</span></p>
            </div>
            <div className="d-flex white fs-10 social terms justify-content-between font-weight-xlight">
            <li> <a href="/">Privacy Policy</a></li>
            <li> <a href="/">Legal</a></li>
            <li> <a href="/">Terms & Condition</a></li>
            
          </div>

            </div>

           </div>
  
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer
