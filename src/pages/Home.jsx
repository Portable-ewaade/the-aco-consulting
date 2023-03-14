import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
    <Navbar />
       {/* section-1 */}
       <section className="home-hero  text-light pt-5 welcome">
          <div className="ui-wrapper-xlarge">
            <div className="container pt-2 text-start justify-content-center">
              <div className="row">
                <div classname="col-lg-6 col-md-8">
                <div>
                  <img src="../../../../assets/images/indicator.png" alt="ee" className="-ash" />
                  <h1 className="fs-60 grey font-weight-bold">
                  Lorem Ipsum Lorem <br /> Lorem Ipsum
                  </h1>
                </div>
                  <p className='grey fs-16 w-50 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,ut nam laboriosam distinctio ipsa saepe possimus provident esse nesciunt facere </p>
                 
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* section-5 */}
        <section className=" border">
          <div className="ui-wrapper-large">
            <div className="container">
              <div className="text-center">
                <div>
                <h1 className="cs-aco-red mb-3 fs-50 font-weight-bold">
                  <span className='black'>What</span> We Do
                </h1>
                <img src="../../../../assets/images/rough.png" alt="ee" className="underline-ash" />
                </div>
                <p className='fs-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae</p>

                <div className="row works">
                  <div className="col-md my-3">
                    <div className=" pt-2">
                    <img src="../../../../assets/images/icon.png" alt="" className="mb-3" />
                     <h6>Software Development</h6>
                     <p className='grey fs-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,.</p>
                    </div>
                  </div>
                  <div className="col-md my-3">
                    <div className=" pt-2">
                    <img src="../../../../assets/images/icon.png" alt="" className="mb-3" />
                    <h6>Cloud Governance</h6>
                     <p className='grey fs-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,.</p>
                    </div>
                  </div>
                  <div className="col-md my-3">
                    <div className=" pt-2">
                    <img src="../../../../assets/images/icon.png" alt="" className="mb-3" />
                    <h6>Retailed and Commerce</h6>
                     <p className='grey fs-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,.</p>
                    </div>
                  </div>
                 
                </div>
                <div className="row mt-3 works">
                  <div className="col-md my-3">
                    <div className=" pt-2">
                    <img src="../../../../assets/images/icon.png" alt="" className="mb-3" />
                    <h6>Software Development</h6>
                     <p className='grey fs-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,.</p>
                    </div>
                  </div>
                  <div className="col-md my-3">
                    <div className=" pt-2">
                    <img src="../../../../assets/images/icon.png" alt="" className="mb-3" />
                    <h6>Cloud Governance</h6>
                     <p className='grey fs-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,.</p>
                    </div>
                  </div>
                  <div className="col-md my-3">
                    <div className=" pt-2 ">
                    <img src="../../../../assets/images/icon.png" alt="" className="mb-3" />
                    <h6>Retailed and Commerce</h6>
                     <p className='grey fs-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,.</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
       
        {/* section-6 */}
        {/* <section className="container brand">
          
        </section> */}
        <section className="p-3 bg-grey brand">
          <div className="container">
          <div className="p-5 ">
            <h2 className="black fs-45">GREAT <span className="line--acoo fs-65">BRANDS</span> <br /> WE WORK WITH</h2>
          </div>
              <div className='row'>
                <div className="col-md-10 mx-auto">
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
                    <p className='grey fs-15'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,</p>
                    <button className="large-btn btn-lg mt-2 fs-14 py-3 px-5 font-weight-light" type="button">Get in Touch <i class="bi bi-arrow-right"></i></button>
                  </div>
                  <div>
                  
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

export default Home
