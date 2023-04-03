import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Home = () => {
  const options = {
    margin: 10,
    nav: true,
    dots: true,
    rewind: true,
    autoplay: true,
    responsive: {
    0: {
        items: 1,
    },
    400: {
        items: 1,
    },
    600: {
        items: 1,
    },
    700: {
        items: 1.5,
    },
    1000: {
        items:3,
    },
    1100: {
        items: 4,
    },
    },
} 
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
                  Think, Transform, Build <br /> 
                  Innovate and Grow. 
                  </h1>
                </div>
                  <p className='grey fs-16 w-50 '>Looking to innovate and transform your business, A & Co Consulting can help you design, develop and deliver your dreams. </p>
                 
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
                <div className="row">
                   <div className="col-md-7 mx-auto">
                   <p className='fs-16'>A & co consulting is an innovation driven consultancy that harnesses the power of technology to provide sustainable and profitable solutions to clients world wide across various industries. We help organizations strategize, design, develop, implement and manage technological systems that drive revenue increase and growth to achieve goals.</p>
                   </div>
                </div>
                <div className="row works">
                  <div className="col-md my-3">
                    <div className=" pt-2">
                    <img src="../../../../assets/images/icon.png" alt="" className="mb-3" />
                     <h6>Software Development</h6>
                     <p className='grey fs-16'>Take your business to the next level with reliable, 
                        scalable and unique software solutions built 
                        with the latest tools and technologies.</p>
                    </div>
                  </div>
                  <div className="col-md my-3">
                    <div className=" pt-2">
                    <img src="../../../../assets/images/icon.png" alt="" className="mb-3" />
                    <h6>Cloud Migration</h6>
                     <p className='grey fs-16'>Position your organization for growth 
                        while increasing effectiveness, efficiency, 
                        and security.
                        </p>
                    </div>
                  </div>
                  <div className="col-md my-3">
                    <div className=" pt-2">
                    <img src="../../../../assets/images/icon.png" alt="" className="mb-3" />
                    <h6>Product Design and Branding</h6>
                     <p className='grey fs-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,.</p>
                    </div>
                  </div>
                 
                </div>
                <div className="row mt-3 works">
                  <div className="col-md my-3">
                    <div className=" pt-2">
                    <img src="../../../../assets/images/icon.png" alt="" className="mb-3" />
                    <h6>Strategy and Business Development</h6>
                     <p className='grey fs-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,.</p>
                    </div>
                  </div>
                  <div className="col-md my-3">
                    <div className=" pt-2">
                    <img src="../../../../assets/images/icon.png" alt="" className="mb-3" />
                    <h6>Data Analytics</h6>
                     <p className='grey fs-16'>Gain competitive advantage and increase
                        business value by identifying and 
                        capturing meaningful insights.
                      </p>
                    </div>
                  </div>
                  <div className="col-md my-3">
                    <div className=" pt-2 ">
                    <img src="../../../../assets/images/icon.png" alt="" className="mb-3" />
                    <h6>Dedicated Team Building</h6>
                     <p className='grey fs-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,.</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
       

        <section className="p-3 bg-grey brand">
          <div className="container">
          <div className="p-5 ">
            <h2 className="black fs-45">GREAT <span className="line--acoo fs-65">BRANDS</span> <br /> WE WORK WITH</h2>
          </div>
              <div className='row'>
                <div className="col-md-12">
                   <div className="row ">
                   <OwlCarousel className='owl-theme owl-controls active-o custom-nav owl-nav mrgt1' {...options}>
                    <div class='item'>
                      <div className="col-sm-6 col-md-3 company">
                        <img src="../../../../assets/images/aws-3215369-2673787.webp" alt="" className="" />
                      </div>
                    </div>
                  
                    <div class='item'>
                    <div className=" col-sm-6 col-md-3 company">
                        <img src="../../../../assets/images/logo.png " alt="" className="" />
                      </div>
                    </div>
            
                <div class='item'>
                <div className=" col-sm-6 col-md-3 company">
                    <img src="../../../../assets/images/artcolony.png" alt="" className="" />
                  </div>
                </div>
                <div class='item'>
                  <div className=" col-sm-6 col-md-3 company">
                    <img src="../../../../assets/images/Layer_1.png" alt="" className="" />
                  </div>
                </div>
                <div class='item'>
                  <div className=" col-sm-6 col-md-3 company">
                    <img src="../../../../assets/images/google.png" alt="" className="" />
                  </div>
                </div>
                <div class='item'>
                  <div className=" col-sm-6 col-md-3 company">
                    <img src="../../../../assets/images/zend.jpg" alt="" className="" />
                  </div>
                </div>
                <div class='item'>
                  <div className=" col-sm-6 col-md-3 company">
                    <img src="../../../../assets/images/paystack.jpg" alt="" className="" />
                  </div>
                </div>
                <div class='item'>
                  <div className=" col-sm-6 col-md-3 company">
                    <img src="../../../../assets/images/amp.webp" alt="" className="" />
                  </div>
                </div>
              </OwlCarousel>
           
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
                    <p className='grey fs-15'>Looking to bring your ideas to life? Contact us for more information.</p>
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
