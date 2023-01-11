import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Team = () => {
  return (
    <>
    <Navbar />
    
      {/* team section */}
      <section className="home-hero  text-light pt-5 pb-5 mt-5 welcome" style={{backgroundImage: 'url("../../../../assets/images/hero-bg.png")'}}>
          <div className="ui-wrapper-xxlarge">
            <div className="container mt-5 pt-5 text-end justify-content-center">
              <div className="row">
                <div classname="col-lg-6 col-md-8">
                  <h1 className="fs-60 white font-weight-bold p-5">
                    Meet Our Team
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-team">
          <div className="ui-wrapper-small">
            <div className="container">
              {/* Start Header Section */}
              <div className="row justify-content-center text-center">
                <div className="col-md-8 col-lg-6">
                  <div className="header-section">
                    <h3 className="small-title">Our Experts</h3>
                    <h2 className="title">Let's meet with our team members</h2>
                  </div>
                </div>
              </div>
              {/* / End Header Section */}
              <div className="row">
                {/* Start Single Person */}
                <div className="col-sm-6 col-lg-4 col-xl-3">
                  <div className="single-person">
                    <div className="person-image">
                      <img src="https://i.ibb.co/G2CBWvb/person1.jpg" alt="" />
                      <span className="icon fs-15">
                        CEO
                      </span>
                    </div>
                    <div className="person-info">
                      <h3 className="full-name">John Doe</h3>
                      <span className="speciality">Web Developer</span>
                    </div>
                  </div>
                </div>
                {/* / End Single Person */}
                {/* Start Single Person */}
                <div className="col-sm-6 col-lg-4 col-xl-3">
                  <div className="single-person">
                    <div className="person-image">
                      <img src="https://i.ibb.co/nbpNr4r/person2.jpg" alt="" />
                      <span className="icon fs-15">
                        PM
                      </span>
                    </div>
                    <div className="person-info">
                      <h3 className="full-name">Robert Smith</h3>
                      <span className="speciality">WordPress Developer</span>
                    </div>
                  </div>
                </div>
                {/* / End Single Person */}
                {/* Start Single Person */}
                <div className="col-sm-6 col-lg-4 col-xl-3">
                  <div className="single-person">
                    <div className="person-image">
                      <img src="https://i.ibb.co/25zdRMr/person3.jpg" alt="" />
                      <span className="icon fs-14">
                        Devops
                      </span>
                    </div>
                    <div className="person-info">
                      <h3 className="full-name">John Doe</h3>
                      <span className="speciality">Angular Developer</span>
                    </div>
                  </div>
                </div>
                {/* / End Single Person */}
                {/* Start Single Person */}
                <div className="col-sm-6 col-lg-4 col-xl-3">
                  <div className="single-person">
                    <div className="person-image">
                      <img src="https://i.ibb.co/w0ynr2Q/person4.jpg" alt="" />
                      <span className="icon fs-15">
                        SE
                      </span>
                    </div>
                    <div className="person-info">
                      <h3 className="full-name">John Smith</h3>
                      <span className="speciality">Javascript Developer</span>
                    </div>
                  </div>
                </div>
                {/* / End Single Person */}
              </div>
              <div className="row mt-5">
                {/* Start Single Person */}
                <div className="col-sm-6 col-lg-4 col-xl-3">
                  <div className="single-person">
                    <div className="person-image">
                      <img src="https://i.ibb.co/G2CBWvb/person1.jpg" alt="" />
                      <span className="icon fs-15">
                        CEO
                      </span>
                    </div>
                    <div className="person-info">
                      <h3 className="full-name">John Doe</h3>
                      <span className="speciality">Web Developer</span>
                    </div>
                  </div>
                </div>
                {/* / End Single Person */}
                {/* Start Single Person */}
                <div className="col-sm-6 col-lg-4 col-xl-3">
                  <div className="single-person">
                    <div className="person-image">
                      <img src="https://i.ibb.co/nbpNr4r/person2.jpg" alt="" />
                      <span className="icon fs-15">
                        PM
                      </span>
                    </div>
                    <div className="person-info">
                      <h3 className="full-name">Robert Smith</h3>
                      <span className="speciality">WordPress Developer</span>
                    </div>
                  </div>
                </div>
                {/* / End Single Person */}
                {/* Start Single Person */}
                <div className="col-sm-6 col-lg-4 col-xl-3">
                  <div className="single-person">
                    <div className="person-image">
                      <img src="https://i.ibb.co/25zdRMr/person3.jpg" alt="" />
                      <span className="icon fs-14">
                        Devops
                      </span>
                    </div>
                    <div className="person-info">
                      <h3 className="full-name">John Doe</h3>
                      <span className="speciality">Angular Developer</span>
                    </div>
                  </div>
                </div>
                {/* / End Single Person */}
                {/* Start Single Person */}
                <div className="col-sm-6 col-lg-4 col-xl-3">
                  <div className="single-person">
                    <div className="person-image">
                      <img src="https://i.ibb.co/w0ynr2Q/person4.jpg" alt="" />
                      <span className="icon fs-15">
                        SE
                      </span>
                    </div>
                    <div className="person-info">
                      <h3 className="full-name">John Smith</h3>
                      <span className="speciality">Javascript Developer</span>
                    </div>
                  </div>
                </div>
                {/* / End Single Person */}
              </div>
            </div>
          </div>
        </section>
        {/* team members*/}
        {/* section 2 */}
        <section className=" p-5">
          <div className="container text-center">
            <div className=" team-bottom">
              <h3>
                DO YOU HAVE TO, DO YO HAVE TO, <br /> DO HAVE TO LET IT LINGER?
              </h3>
            </div>
          </div>
        </section>
        {/* footer section */}
        <Footer />
    </>
  )
}

export default Team
