import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
    <Navbar />
       {/* contact us */}
       <section className="home-hero  text-light pt-5 pb-5 mt-5 welcome " style={{backgroundImage: 'url("../../../../assets/images/team-bg.png")'}}>
          <div className="ui-wrapper">
            <div className="container mt-5 pt-5 text-center justify-content-center">
              <div className="row">
                <div classname="col-lg-6 col-md-8">
                  <h1 className="fs-60 white font-weight-bold p-5">
                    Who we are
                  </h1>
                </div>
              
              </div>
            </div>
          </div>
        </section>
        <div className='row'>
            <div className='col-12 mx-auto col-lg-9'>
            <div className="card text-dark  text-start quote justify-content-center">
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ab at odio natus laudantium, in possimus. Pariatur voluptatibus dolorem aperiam voluptas beatae deleniti cum, corporis non sequi repellendus, optio neque! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem dolores neque sit, similique, maxime sit, similique, maxime </p>
                </div>
            </div>
        </div>
        {/* how we work section */}
        <section className="pt-5 mt-5">
          <div className="container my-5">
            <div className="row">
              <div>
                <h1 className="lead black fs-50 mb-5">
                  How We Work
                </h1>
              </div>
              <div className="col-md">
                <div className="card text-center">
                  <div>
                    <img src="../../../../assets/images/bulb.png" alt="" className="img-fluid w-75" />
                  </div>
                  <div>
                    <h3 className="fs-20 lead mb-5">
                      EXPERTS
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="card text-center">
                  <div>
                    <img src="../../../../assets/images/bulb.png" alt="" className="img-fluid w-75" />
                  </div>
                  <div>
                    <h3 className="fs-20 lead mb-5">
                      KICK-ASS
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="card text-center">
                  <div>
                    <img src="../../../../assets/images/bulb.png" alt="" className="img-fluid w-75" />
                  </div>
                  <div>
                    <h3 className="fs-20 lead mb-5">
                      FUN
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="card text-center">
                  <div>
                    <img src="../../../../assets/images/bulb.png" alt="" className="img-fluid w-75" />
                  </div>
                  <div>
                    <h3 className="fs-20 lead mb-5">
                      FELXIBILITY
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* our values */}
        <section>
          <div className="container">
            <div className="row">
              <div>
                <h1 className="lead black fs-50 mb-3">
                  Core Values
                </h1>
              </div>
              <div className="col mb-5">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius nihil ratione soluta beatae quaerat vel ut. Maiores voluptate, itaque nihil ipsa deleniti ipsam dolore eaque alias officia ab culpa voluptatem minus nesciunt! Animi eius, asperiores eaque commodi nostrum dolorum possimus non. Impedit veniam libero atque veritatis? Omnis repudiandae ad amet?</p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
    </>
  )
}

export default Contact
