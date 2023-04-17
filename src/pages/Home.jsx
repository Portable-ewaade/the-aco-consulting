import React, {useEffect} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";



const Home = () => {
  const options = {
    margin: 10,
    nav: true,
    dots: true,
    rewind: true,
    autoplay: true,
    responsive: {
    0: {
        items: 2,
    },
    400: {
        items: 2,
    },
    600: {
        items: 2,
    },
    700: {
        items: 3,
    },
    1000: {
        items:3,
    },
    1100: {
        items: 4,
    },
    },

    
} 

AOS.init({
  disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 20, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 2000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

useEffect(() => {
  AOS.init();
  AOS.refresh();
}, [])

const sliderOpts = {
  margin: 20,
  nav: false,
  dots: false,
  rewind: true,
  setTimeout: 3,
  autoplay: true,
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
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
          items: 1,
      },
      1000: {
          items: 1,

      }
  },
};


  return (

    <>
    <Navbar />
       {/* section-1 */}
       <section className="home-hero  text-light pt-5 welcome">
          <div className="ui-wrapper-xlarge">
            <div className="container pt-2 text-start justify-content-center " data-aos={"fade-up"}>
              <div className="row">
                <div className="col-lg-6 col-md-8 ">
                         
                   <OwlCarousel className='owl-theme owl-controls custom-nav owl-nav mrgt1' {...sliderOpts} >
                                    
                      <div className="item">
                            <div className="aco-hero">
                          
                          <h1 className="fs-60 grey font-weight-bold">
                          Think, Transform and Build 
                         
                          </h1>
                          <p className='grey fs-16 font-weight-light'>Looking to innovate and transform your business, A & Co Consulting can help you design, develop and deliver your dreams. </p>
                    
                      </div>
                      </div>

                      <div className="item">
                              <div className="aco-hero">
                            
                            <h1 className="fs-60 cs-aco-red font-weight-bold">
                            Innovate and Grow. 
                            </h1>
                            <p className='grey fs-16 font-weight-light '>Looking to innovate and transform your business, A & Co Consulting can help you design, develop and deliver your dreams. </p>
               
                          </div>
                      </div>
                    

                    </OwlCarousel>
  
               
              
                  {/* <img src="../../../../assets/images/indicator.png" alt="ee" className="-ash"  */}
             
                  
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
                <div className="aco-wedo" data-aos={"fade-up"}>
                <h1 className="aco-wedo cs-aco-red mb-3 fs-50 font-weight-bold">
                  <span className='black'>What </span> We Do
                </h1>
                <img src="../../../../assets/images/rough.png" alt="ee" className="underline-ash" />
                </div>
                <div className="row">
                   <div className="col-lg-7 col-md-12 mx-auto aco-wedo-p" data-aos={"fade-down"}>
                   <p className='fs-16'>A & co consulting is an innovation driven consultancy that harnesses the power of technology to provide sustainable and profitable solutions to clients world wide across various industries. We help organizations strategize, design, develop, implement and manage technological systems that drive revenue increase and growth to achieve goals.</p>
                   </div>
                </div>
                <div className="row works">
                  <div className="col-md my-3" data-aos={"fade-right"}>
                    <div className="aco-wedoo pt-2">
                      <img src="../../../../assets/images/icon.png" alt="" className="mb-3" />
                     <h6>Software Development</h6>
                     <p className='grey fs-16 aco-wedo-p'>Take your business to the next level with reliable, 
                        scalable and unique software solutions built 
                        with the latest tools and technologies.</p>
                    </div>
                  </div>
                  <div className="col-md my-3" data-aos={"fade-up"}>
                    <div className=" pt-2">
                    <img src="../../../../assets/images/icon.png" alt="" className="mb-3" />
                    <h6>Cloud Migration</h6>
                     <p className='grey fs-16 aco-wedo-p'>Position your organization for growth 
                        while increasing effectiveness, efficiency, 
                        and security.
                        </p>
                    </div>
                  </div>
                  <div className="col-md my-3" data-aos={"fade-left"}>
                    <div className=" pt-2">
                    <img src="../../../../assets/images/icon.png" alt="" className="mb-3" />
                    <h6>Product Design and Branding</h6>
                     <p className='grey fs-16 aco-wedo-p'>Build a strong brand identity and product to 
                        connect with your target audience using 
                        visually compelling branding strategies.</p>
                    </div>
                  </div>
                 
                </div>
                <div className="row mt-3 works">
                  <div className="col-md my-3" data-aos={"fade-right"}>
                    <div className=" pt-2">
                    <img src="../../../../assets/images/icon.png" alt="" className="mb-3" />
                    <h6>Strategy and Business Development</h6>
                     <p className='grey fs-16 aco-wedo-p'>Drive growth and achieve your business objectives
                        with uniquely tailored growth strategies to
                        stay ahead of the competition.</p>
                    </div>
                  </div>
                  <div className="col-md my-3" data-aos={"fade-up"}>
                    <div className=" pt-2">
                    <img src="../../../../assets/images/icon.png" alt="" className="mb-3" />
                    <h6>Data Analytics</h6>
                     <p className='grey fs-16 aco-wedo-p'>Gain competitive advantage and increase
                        business value by identifying and 
                        capturing meaningful insights.
                      </p>
                    </div>
                  </div>
                  <div className="col-md my-3" data-aos={"fade-left"}>
                    <div className=" pt-2 ">
                    <img src="../../../../assets/images/icon.png" alt="" className="mb-3" />
                    <h6>Dedicated Team Building</h6>
                     <p className='grey fs-16 aco-wedo-p'>Grow and scale business with a talented
                        and dedicated team of highly skilled
                        professionals for your projects.</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
       

        <section className="p-3 bg-grey brand">
          <div className="container">
          <div className=" aco-brands p-5 " data-aos={"fade-right"}>
            <h2 className="black fs-45">GREAT <span className="line--acoo fs-65">BRANDS</span> <br /> WE WORK WITH</h2>
          </div>
              <div className='row' data-aos={"fade-up"}>
                <div className="col-md-12">
                   <div className="row ">
                   <OwlCarousel className='owl-theme owl-controls active-o custom-nav owl-nav mrgt1' {...options}>
                    {/* <div class='item'>
                      <div className="col-sm-6 col-md-3 company">
                        <img src="../../../../assets/images/aws-3215369-2673787.webp" alt="" className="" />
                      </div>
                    </div> */}
                  
                    <div class='item'>
                    <div className=" col-sm-6 col-md-3 company">
                        <img src="../../../../assets/images/ojanow.png " alt="oja-now" className="" style={{position:"relative", top: "5px"}} />
                      </div>
                    </div>
            
                <div class='item'>
                <div className=" col-sm-6 col-md-3 company">
                    <img src="../../../../assets/images/artcolony.png" alt="artcolony" className="" style={{position:"relative", top: "5px"}}/>
                  </div>
                </div>
                <div class='item'>
                  <div className=" col-sm-6 col-md-3 company">
                    <img src="../../../../assets/images/path.png" alt="pathway" className="" style={{position:"relative", top: "5px"}}/>
                  </div>
                </div>
                <div class='item'>
                  <div className=" col-sm-6 col-md-3 company" >
                    <img src="../../../../assets/images/google.png" alt="google" className="" />
                  </div>
                </div>
                <div class='item'>
                  <div className=" col-sm-6 col-md-3 company">
                    <img src="../../../../assets/images/zend.png" alt="zend" className="" style={{position:"relative", top: "13px"}}/>
                  </div>
                </div>
                <div class='item'>
                  <div className=" col-sm-6 col-md-3 company">
                    <img src="../../../../assets/images/paystack.png" alt="paystack" className="" style={{position:"relative", top: "13px"}} />
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
          <div className="ui-wrapper-small" data-aos={"zoom-in"}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 text-center mx-auto">
                  <div className='aco-ready'>
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
