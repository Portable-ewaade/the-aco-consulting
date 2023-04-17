import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const Services = () => {
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

  return (
    
    <>
    <Navbar />
     
       <section className="home-hero  text-light pt-5 welcome">
          <div className="ui-wrapper-xlarge">
            <div className="container pt-2 text-start aco-services">
              <div className="row mx-5 aco-services">
                <div className="col-lg-6 col-md-8 aco-service aco-hero">
                  
                  <h1 className="fs-60 grey font-weight-bold">
                  Lorem Ipsum Lorem <br /> Lorem Ipsum
                  </h1>
                  <p className='grey fs-16 w-50 grey2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,ut nam laboriosam distinctio ipsa saepe possimus provident esse nesciunt facere </p>
                 
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className=" border">
          <div className="ui-wrapper-large">
            <div className="container">
            <div className="row works">
                  <div className=" d-lg-flex justify-content-between p-5  service" >
                  <div className='px-5 services' data-aos={"fade-left"}>
                      <p className='fs-16'>01</p>
                      <h4 className='fs-20 font-weight-bold'>Software <br /> Development</h4>
                        <p className=' grey2 fs-14 w-75 services'>LOur team of engineers build high-performing, 
                          user friendly, and secure custom applications
                          that provide superior customer experience and 
                          ensure faster growth.</p>
                        </div>
                        <div className='w-25 services' data-aos={"fade-right"}>
                        <div className="d-lg-flex justify-content-between aco-service-type">
                          <p className='fs-16'> Custom Development Services</p>
                        </div>
                          <hr  className='grey2'/>
                          <div className="d-lg-flex justify-content-between aco-service-type">
                          <p  className='fs-16'> Application  Redesign and Modernization</p>
                        </div>
                          <hr className='grey2'/>
                          <div className="d-lg-flex justify-content-between aco-service-type">
                          <p  className='fs-16'>Web and Application Integration Services</p>
                          
                        </div>
                        <hr className='grey2'/>
                        <div className="d-lg-flex justify-content-between aco-service-type">
                          <p  className='fs-16'> Technology Consultation</p>
                        
                        </div>
                          

                        </div>
                      </div>
                 
                  <div className="d-lg-flex justify-content-between p-5 service">
                  <div className='px-5 services' data-aos={"fade-left"}>
                      <p className='fs-16'>02</p>
                      <h4 className='fs-20 font-weight-bold'>Product<br/> Design and Branding</h4>
                      <p  className='fs-14 w-75 grey2 services'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,.</p>
                    </div>
                    <div className='w-25 services' data-aos={"fade-right"}>
                     <div className="d-lg-flex justify-content-between aco-service-type">
                      <p className='fs-16'> Web and Mobile App Design</p>
                     </div>
                      <hr  className=' grey2'/>
                      <div className="d-lg-flex justify-content-between aco-service-type">
                      <p  className='fs-16' >Custom Digital Product Design</p>
                     </div>
                      <hr className='grey2'/>
                      <div className="d-lg-flex justify-content-between aco-service-type">
                      <p  className='fs-16'>Redesign and Modernization Services</p>
                     </div>
                     <hr className='grey2'/>
                     <div className="d-lg-flex justify-content-between aco-service-type">
                      <p  className='fs-16'>Corporate Branding and Logo Design</p>
                     
                     </div>

                    </div>
                  </div>
                 
                </div>
               
                <div className="d-lg-flex justify-content-between p-5 service">
                  <div className='px-5 services' data-aos={"fade-left"}>
                      <p className='fs-16'>03</p>
                      <h4 className='fs-20 font-weight-bold'>Dedicated <br /> Team Building</h4>
                      <p  className='fs-14 w-75 grey2'>Expand your development capabilities
                          and augment your teams competence 
                          with a dedicated development team 
                          and subject matter experts.</p>
                    </div>
                    
                    <div className='w-25 services' data-aos={"fade-right"}>
                     <div className="d-lg-flex justify-content-between aco-service-type">
                      <p className='fs-16'> Full Stack Developers</p>
                     </div>
                      <hr  className=' grey2'/>
                      <div className="d-lg-flex justify-content-between aco-service-type">
                      <p  className='fs-16' >Dev Ops and Infrastructure Engineers</p>
                     </div>
                      <hr className='grey2'/>
                      <div className="d-lg-flex justify-content-between aco-service-type">
                      <p  className='fs-16'>IT Support Engineers</p>
                     </div>
                     <hr className='grey2'/>
                     <div className="d-lg-flex justify-content-between aco-service-type">
                      <p  className='fs-16'>Data Engineers and Cybersecurity Specialists</p>
                     
                     </div>

                    </div>
                  </div>
            </div>
          </div>
        </section>
       
        <section className="p-3 bg-grey brand">
          <div className="container">
          <div className="ui-wrapper-large">
          <div className="aco-weare" data-aos={"zoom-out"}>
           <div className='aco-weare'>
           <h2 className="grey2 fs-45 font-weight-bold mb-3">Our <span className="line--acoo fs-45 mb-3 font-weight-bold">Processes</span></h2>
            <img src="../../../../assets/images/rough.png" alt="ee" className="underline-ash" />
           </div>
            <p className='fs-16 grey2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae, ut nam laboriosam</p>
          </div>
            {/* <div className="row ">
              <div className="col-md-4">
                <p className="font-weight-bold grey2 fs-55 ">01</p>
                <p className='font-weight-bold black px-5 '>Expertise</p>
                <p className='grey2 text-start fs-16 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae, ut nam laboriosam</p>
              </div>
            
              <div className="col-md-4">
                <p className="font-weight-bold grey2 fs-55 ">02</p>
                <p className='font-weight-bold black px-5 '>Expertise</p>
                <p className='grey2 text-start fs-16 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae, ut nam laboriosam</p>
              </div>
              <div className="col-md-4">
                <p className="font-weight-bold grey2 fs-55 ">03</p>
                <p className='font-weight-bold black px-5 '>Expertise</p>
                <p className='grey2 text-start fs-16 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae, ut nam laboriosam</p>
              </div>
            </div> */}
            <div className="row" data-aos={"zoom-out"}>
              <OwlCarousel className='owl-theme owl-controls active-o custom-nav owl-nav mrgt1' {...options}>
                <div class='item'>
                  <div className="col-md-12">
                    <p className="font-weight-bold grey2 fs-55 ">01</p>
                    <p className='font-weight-bold black px-5 '>Expertise</p>
                    <p className='grey2 font-weight-light text-start fs-13 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae, ut nam laboriosam</p>
                  </div>
                </div>
                  
                <div class='item'>
                  <div className="col-md-12">
                    <p className="font-weight-bold grey2 fs-55 ">02</p>
                    <p className='font-weight-bold black px-5 '>Expertise</p>
                    <p className='grey2 font-weight-light  text-start fs-13 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae, ut nam laboriosam</p>
                  </div>
                </div>
                <div class='item'>
                  <div className="col-md-12">
                    <p className="font-weight-bold grey2 fs-55 ">03</p>
                    <p className='font-weight-bold black px-5 '>Expertise</p>
                    <p className='grey2 font-weight-light  text-start fs-13 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae, ut nam laboriosam</p>
                  </div>
                </div>
                
                <div class='item'>
                  <div className="col-md-12">
                    <p className="font-weight-bold grey2 fs-55 ">04</p>
                    <p className='font-weight-bold black px-5 '>Expertise</p>
                    <p className='grey2 font-weight-light text-start fs-13 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae, ut nam laboriosam</p>
                  </div>
                </div>
                <div class='item'>
                  <div className="col-md-12">
                    <p className="font-weight-bold grey2 fs-55 ">05</p>
                    <p className='font-weight-bold black px-5 '>Expertise</p>
                    <p className='grey2 font-weight-light  text-start fs-13 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae, ut nam laboriosam</p>
                  </div>
                </div>
                <div class='item'>
                  <div className="col-md-12">
                    <p className="font-weight-bold grey2 fs-55 ">06</p>
                    <p className='font-weight-bold black px-5 '>Expertise</p>
                    <p className='grey2 font-weight-light  text-start fs-13 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae, ut nam laboriosam</p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>

          </div>
        </section>

        <Footer />
    </>
  )
}

export default Services