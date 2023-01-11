import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
    <Navbar />
       {/* contact us */}
       <section className="home-hero  text-light pt-5 pb-5 mt-5 welcome " style={{backgroundImage: 'url("../../../../assets/images/what.png ")'}}>
          <div className="ui-wrapper-xxlarge">
            <div className="container mt-5 pt-5 text-end justify-content-center">
              <div className="row">
                <div classname="col-lg-6 col-md-8">
                  <h1 className="fs-60 white font-weight-bold p-5">
                    What <br /> We Do
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* our offer setion for each container */}
        <section className="py-5 py-2 ">
          <div className="ui-wrapper-large">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 mx-auto">
                  <h5 className="black fs-40 font-weight-medium" style={{letterSpacing: '10px'}}>
                    Our offers 
                  </h5>
                </div>
              </div>
              <div className="row pt-5">
                <div className="col-md-6  mb-2">
                  <div className="card-body text d-flex justify-content-between">
                    <div>
                      <img src="../../../../assets/images/bulb.png" alt="" className="img-fluid w-100" />
                    </div>
                    <div>
                      <h3 className="fs-20">
                        BUILDING
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquam neque voluptates similique reiciendis possimus quod consectetur aut soluta sit voluptatum tenetur quae, quo, expedita excepturi. Veritatis enim quia iure.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6  mb-2">
                  <div className="card-body text d-flex justify-content-between">
                    <div>
                    <img src="../../../../assets/images/laptop-removebg-preview.png" alt="" className="img-fluid w-100" />
                    </div>
                    <div className="mx-3">
                      <h3 className="fs-20">
                        WEB DESIGN
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquam neque voluptates similique reiciendis possimus quod consectetur aut soluta sit voluptatum tenetur quae, quo, expedita excepturi. Veritatis enim quia iure.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6  sm-mb-2">
                  <div className="card-body text d-flex justify-content-between">
                    <div>
                    <img src="../../../../assets/images/search-removebg-preview.png" alt="" className="img-fluid w-100" />
                    </div>
                    <div className="mx-3">
                      <h3 className="fs-20">
                        DATA RESEARCH
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquam neque voluptates similique reiciendis possimus quod consectetur aut soluta sit voluptatum tenetur quae, quo, expedita excepturi. Veritatis enim quia iure.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6  ">
                  <div className="card-body text d-flex justify-content-between">
                    <div>
                    <img src="../../../../assets/images/bulb.png" alt="" className="img-fluid w-100" />
                    </div>
                    <div>
                      <h3 className="fs-20">
                        BUILDING
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquam neque voluptates similique reiciendis possimus quod consectetur aut soluta sit voluptatum tenetur quae, quo, expedita excepturi. Veritatis enim quia iure.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-body text d-flex justify-content-between">
                    <div>
                    <img src="../../../../assets/images/laptop-removebg-preview.png" alt="" className="img-fluid w-100" />
                    </div>
                    <div className="mx-3">
                      <h3 className="fs-20">
                        WEB DESIGN
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquam neque voluptates similique reiciendis possimus quod consectetur aut soluta sit voluptatum tenetur quae, quo, expedita excepturi. Veritatis enim quia iure.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-body text d-flex justify-content-between">
                    <div>
                    <img src="../../../../assets/images/search-removebg-preview.png" alt="" className="img-fluid w-100" />
                    </div>
                    <div className="mx-3">
                      <h3 className="fs-20">
                        DATA RESEARCH
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquam neque voluptates similique reiciendis possimus quod consectetur aut soluta sit voluptatum tenetur quae, quo, expedita excepturi. Veritatis enim quia iure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
    </>
  )
}

export default Contact
