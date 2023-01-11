import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
    <Navbar />
       {/* section-1 */}
       <section className="home-hero  text-light pt-5 pb-5 mt-5 welcome" style={{backgroundImage: 'url("../../../../assets/images/hero-bg.png")'}}>
          <div className="ui-wrapper-xxlarge">
            <div className="container mt-5 pt-5 text-start justify-content-center">
              <div className="row">
                <div classname="col-lg-6 col-md-8">
                  <h1 className="fs-65 white font-weight-bold">
                    Welcome to <br /> a &amp; co consulting <br />
                    Company
                  </h1>
                 
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section-2 */}
        <section className="text-light pt-5 pb-5 mt-5 ">
          <div className="ui-wrapper-medium">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h5 className="black fs-20">
                    Hello,
                  </h5>
                  <h1 className="black fs-50 font-weight-light">
                    We are <span className="line--aco">Consultant</span>
                    
                  </h1>
                  {/* <span className=''>{' h'}</span> */}
                
                </div>
                
                <div className="col-md-6">
                  <p className="black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae, ut nam laboriosam distinctio ipsa saepe possimus provident esse nesciunt facere repellat perferendis est, quaerat tempore.
                  </p> 
                  <p className="black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nostrum modi vitae est inventore commodi quasi illo tempora fugiat nisi aperiam quas accusamus! Magni assumenda exercitationem nostrum fugiat provident animi.
                  </p>
                  <p className="black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae, ut nam laboriosam distinctio ipsa saepe possimus provident esse nesciunt facere repellat perferendis est, quaerat tempore.
                  </p> 
                  <p className="black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nostrum modi vitae est inventore commodi quasi illo tempora fugiat nisi aperiam quas accusamus! Magni assumenda exercitationem nostrum fugiat provident animi.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae magni unde, nulla excepturi dicta nihil quaerat perferendis delectus eligendi omnis aut ipsam culpa atque eos aliquid. Fugiat culpa obcaecati amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-light pt-5 pb-5 mt-5 ">
          <div className="ui-wrapper-medium">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img src="../../../../assets/images/pexels-designecologist-1779487.jpg" alt="" className="img-fluid w-70 rounded" />
                </div>
                <div className="col-md-6">
                  <h1 className="black fs-40 font-weight-light mt-5">
                    Technology Advancement
                  </h1>
                  <p className="black mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae, ut nam laboriosam distinctio ipsa saepe possimus provident esse nesciunt facere repellat perferendis est, quaerat tempore.
                  </p> 
                  <p className="black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nostrum modi vitae est inventore commodi quasi illo tempora fugiat nisi aperiam quas accusamus! Magni assumenda exercitationem nostrum fugiat provident animi.
                  </p>
                  <p className="black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae, ut nam laboriosam distinctio ipsa saepe possimus provident esse nesciunt facere repellat perferendis est, quaerat tempore.
                  </p> 
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section-3 */}
        <section className="p-5 csbg-hash ">
          <div className="ui-wrapper-large">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 mx-auto">
                  <h5 className="white fs-40 font-weight-light" style={{letterSpacing: '10px'}}>
                    Our Works
                  </h5>
                </div>
              </div>
              <div className="row pt-5">
                <div className="col-md ">
                  <div className="card-body text">
                    <img src="../../../../assets/images/pexels-designecologist-1779487.jpg" alt="" className="img-fluid w-100" />
                    <h2 className="mt-3 fs-15 font-weight-light">
                      NIGERIA
                    </h2>
                    <h3 className="fs-20">
                      Oja Lagos
                    </h3>
                  </div>
                </div>
                <div className="col-md mb-2">
                  <div className="card-body text">
                    <img src="../../../../assets/images/pexels-tranmautritam-251225.jpg" alt="" className="img-fluid w-100" />
                    <h2 className="mt-3 fs-15 font-weight-light">
                      NIGERIA
                    </h2>
                    <h3 className="fs-20">
                      Artcolony
                    </h3>
                  </div>
                </div>
                <div className="col-md sm-mb-2">
                  <div className="card-body text">
                    <img src="../../../../assets/images/pexels-tranmautritam-285814.jpg" alt="" className="img-fluid w-100" />
                    <h2 className="mt-3 fs-15 font-weight-light">
                      HAVA NEW YORK
                    </h2>
                    <h3 className="fs-20">
                      BNY Mellon
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section-4 */}
        <section className="p-4 methodology ">
          <div className="ui-wrapper-large">
            <div className="text-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 mx-auto">
                    <h3 className="fs-40 font-weight-light mb-5 black" style={{letterSpacing: '10px'}}>
                      Our Methodology
                    </h3>
                    <div className="row">
                      <div className="col-lg-4 col-sm-6 col-ex-12 methodology-item wow pt-5 lightSpeedIn" data-wow-offset={200}>
                        {/* <span className="fa fa-group" /> */}
                        <img src="../../../../assets/images/create.png" alt="" style={{width: '100px', height: '100px'}} />
                        <h2 className="black fs-25  mt-2 font-weight-light">Create</h2>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-ex-12 methodology-item pt-5 wow lightSpeedIn" data-wow-offset={200}>
                      <img src="../../../../assets/images/building.png" alt="" style={{width: '100px', height: '100px'}} />
                        <h2 className="black fs-30 black mt-2 font-weight-light"> Build</h2>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-ex-12 methodology-item wow pt-5 lightSpeedIn" data-wow-offset={200}>
                        <img src="../../../../assets/images/optimization.png" alt="" style={{width: '100px', height: '100px'}} />
                        <h2 className="black fs-25 black mt-2 font-weight-light">Optimize</h2>
                      </div>
                    </div>
                  </div>
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
                    <h3 className="small-title">Our Core Values</h3>
                    <h2 className="title font-weight-light">Our Team</h2>
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
        {/* section-5 */}
        <section className="p-5 border">
          <div className="ui-wrapper-large">
            <div className="container">
              <div className="text-center">
                <h1 className="cs-aco-red mb-3 fs-50 font-weight-light">
                  Featured Offerings
                </h1>
                {/* <div class=" d-flex justify-content-center text-secondary my-3">
                    <hr width="100%">
                </div> */}
                <div className="row">
                  <div className="col-md my-3">
                    <div className="card pt-2 cs-aco-red">
                      <p>RETAILED &amp; <br /> COMMERCE MEDIA</p>
                    </div>
                  </div>
                  <div className="col-md my-3">
                    <div className="card pt-2 cs-aco-red">
                      <p>CLOUD <br /> GOVERANCE</p>
                    </div>
                  </div>
                  <div className="col-md my-3">
                    <div className="card pt-2 cs-aco-red">
                      <p className="bold">MEDIA COSTUMER <br /> INTELLIGENCE</p>
                    </div>
                  </div>
                  {/* <div class=" d-flex justify-content-center text-secondary my-3">
                        <hr width="100%">
                    </div> */}
                </div>
                <div className="row mt-3">
                  <div className="col-md my-3">
                    <div className="card pt-2 cs-aco-red">
                      <p>RETAILED &amp; <br /> COMMERCE MEDIA</p>
                    </div>
                  </div>
                  <div className="col-md my-3">
                    <div className="card pt-2 cs-aco-red">
                      <p>CLOUD <br /> GOVERANCE</p>
                    </div>
                  </div>
                  <div className="col-md my-3">
                    <div className="card pt-2 cs-aco-red">
                      <p className="bold">MEDIA COSTUMER <br /> INTELLIGENCE</p>
                    </div>
                  </div>
                  {/* <div class=" d-flex justify-content-center text-secondary my-3">
                        <hr width="100%">
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-5">
          <div className="ui-wrapper-small ">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 text-center mx-auto">
                  <div>
                    <h1 className="fs-40 font-weight-bold">
                      Ready To Level Up?
                    </h1>
                    <button className="large-btn  btn-lg mt-5 p-5fs-20" type="button">Shoot Us A Mail</button>
                  </div>
                  <div>
                    <h4 className="text-secondary border border-seondary p-4 rounded mt-5">
                      AWS Advanced Consulting Partner
                      <div className="vr" />   
                      {/* <a href="#" className="text-decoration-none"> LEARN MORE</a> */}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section-6 */}
        <section className="container">
          <div className="pt-5">
            <h2 className="black">PARTNERS</h2>
          </div>
        </section>
        <section className="p-3 bg-secondary">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-3">
                <img src="../../../../assets/images/aws-3215369-2673787.webp" alt="" className="w-50" />
              </div>
              <div className="col-md-3">
                <img src="../../../../assets/images/aws-3215369-2673787.webp" alt="" className="w-50" />
              </div>
              <div className="col-md-3">
                <img src="../../../../assets/images/aws-3215369-2673787.webp" alt="" className="w-50" />
              </div>
              <div className="col-md-3    ">
                <img src="../../../../assets/images/aws-3215369-2673787.webp" alt="" className="w-50" />
              </div>
            </div>
          </div>
        </section>

        <Footer />
    </>
  )
}

export default Home
