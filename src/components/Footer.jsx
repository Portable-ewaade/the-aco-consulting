import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="p-3 bg-black">
        <div className="ui-wrapper-large">
          <div className="container">
            <div className="row">
              <div className="col text-center">
              <Link to="/" className="navbar-brand">
            <img src="../../../assets/images/acoo.png" alt="" className="img-fluid" style={{width: '200px'}} />
            {/* a & co consulting */}
          </Link>
              </div>
              <div className="col-md">
                <h6 className="white">New Business</h6>
                <span className="white"> Tracey Barber</span> <br />
                <Link href="#" className="text-white">Traceybarber@hava.com</Link>
                <div className="mt-4">
                  <span className="white">Laure Ayel</span> <br />
                  <Link href="#" className="white">Laureayel@hava.com</Link>
                </div>
              </div>
              <div className="col-md">
                <h6 className="white disabled">Career</h6>
                <p className="white">To view our current job openings {' '} please {' '}
                  <Link href="#" className="white disabled">click here</Link>
                </p>
              </div>
              <div className="col-md">
                <p className="white">Hava Group 29-30 Quai de Dion Bouton
                  928000 Puteaux France</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer
