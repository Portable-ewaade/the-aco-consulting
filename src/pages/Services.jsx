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
  initClassName: 'aos-init', // className applied after initialization
  animatedClassName: 'aos-animate', // className applied on animation
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
                <div className="col-lg-12 col-md-12 aco-service aco-hero">
                <img src="../../../../assets/images/highlight.png" alt=""  style={{ height: 50, position: "relative", left: "-20px", top: "15px"}}/>
                  <h1 className="fs-60 grey font-weight-bold">
                  Smart Solutions
                    <br /> <span className='grey2 fs-60'>for complex challenges</span> 
                  </h1>
                  <p className='grey fs-16 w-50 grey2 '>We understand that modern technology challenges are multi-dimensional and require a holistic approach.At A&Co, we bring a unique blend of industry expertise, technical skills, and business acumen to help you solve your most complex challenges and identify new opportunities for growth.</p>
                 
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className=" border">
          <div className="ui-wrapper-large">
            <div className="container">
            <div className="works">
                  <div className="row justify-content-between p-5  service" >
                      <div className='col-lg-8 col-md-12 px-5 services' data-aos={"fade-left"}>
                    <p className='fs-16'>01</p>
                    <h4 className='fs-20 font-weight-bold'>Software <br /> Development</h4>
                      <p className=' grey2 fs-16 w-75 services'>Our team of engineers build high-performing, 
                        user friendly, and secure custom applications
                        that provide superior customer experience and 
                        ensure faster growth.</p>
                      </div>
                      <div className='services col-lg-4 col-md-12' data-aos={"fade-right"}>
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
                 
                  <div className="row justify-content-between p-5 service">
                  <div className='col-lg-8 col-md-12 px-5 services' data-aos={"fade-left"}>
                      <p className='fs-16'>02</p>
                      <h4 className='fs-20 font-weight-bold'>Product<br/> Design and Branding</h4>
                      <p  className='fs-16 w-75 grey2 services'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,.</p>
                    </div>
                    <div className='col-md-12 col-lg-4 services' data-aos={"fade-right"}>
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
               
                <div className="row justify-content-between p-5 service">
                  <div className='col-lg-8 col-md-12 px-5 services' data-aos={"fade-left"}>
                      <p className='fs-16'>03</p>
                      <h4 className='fs-20 font-weight-bold'>Dedicated <br /> Team Building</h4>
                      <p  className='fs-16 w-75 grey2'>Expand your development capabilities
                          and augment your teams competence 
                          with a dedicated development team 
                          and subject matter experts.</p>
                    </div>
                    
                    <div className='col-lg-4 col-md-12  services' data-aos={"fade-right"}>
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
                <div className='item'>
                  <div className="col-md-12">
                    <p className="font-weight-bold grey2 fs-55 ">01</p>
                    <p className='font-weight-bold black px-5 '>Analysis <br /> & Assessment</p>
                    <p className='grey2 font-weight-light text-start fs-13 px-5'>We attentively listen to understand your business goals and identify the best technology solutions for your needs.</p>
                  </div>
                </div>
                  
                <div className='item'>
                  <div className="col-md-12">
                    <p className="font-weight-bold grey2 fs-55 ">02</p>
                    <p className='font-weight-bold black px-5 '>Project <br /> Planning</p>
                    <p className='grey2 font-weight-light  text-start fs-13 px-5'>In this crucial phase, we consolidate all features and requirements, establish priorities and set timelines.</p>
                  </div>
                </div>
                <div className='item'>
                  <div className="col-md-12">
                    <p className="font-weight-bold grey2 fs-55 ">03</p>
                    <p className='font-weight-bold black px-5 '>Design & <br /> Visualization</p>
                    <p className='grey2 font-weight-light  text-start fs-13 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae, ut nam laboriosam</p>
                  </div>
                </div>
                
                <div className='item'>
                  <div className="col-md-12">
                    <p className="font-weight-bold grey2 fs-55 ">04</p>
                    <p className='font-weight-bold black px-5 '>Development <br /> & Implementation</p>
                    <p className='grey2 font-weight-light text-start fs-13 px-5'>At this stage, we bring your vision to life using the specified  technology stack and UI/UX designs</p>
                  </div>
                </div>
                <div className='item'>
                  <div className="col-md-12">
                    <p className="font-weight-bold grey2 fs-55 ">05</p>
                    <p className='font-weight-bold black px-5 '>Quality Assurance <br /> & Testing</p>
                    <p className='grey2 font-weight-light  text-start fs-13 px-5'>Our team of experts  ensures that your solution is secure and reliable through rigorous manual and automated testing to prevent bugs.</p>
                  </div>
                </div>
                <div className='item'>
                  <div className="col-md-12">
                    <p className="font-weight-bold grey2 fs-55 ">06</p>
                    <p className='font-weight-bold black px-5 '>Launch <br /> & Support</p>
                    <p className='grey2 font-weight-light  text-start fs-13 px-5'>We not only bring your vision to life but are eager to ensure its growth and continuous evolution.</p>
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