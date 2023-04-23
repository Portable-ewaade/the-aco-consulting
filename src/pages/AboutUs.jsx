import React, {useEffect} from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "aos/dist/aos.css";
import AOS from "aos"

export const AboutUs = () => {
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
         <div className="ui-wrapper-large ">
           <div className="container pt-4 text-start justify-content-center ">
           <div className='d-lg-flex'>
                  <div className='aco-hero' data-aos={"fade-up"}>
                    <img src="../../../../assets/images/highlight.png" alt=""  style={{ height: 50, position: "relative", left: "-20px", top: "15px"}}/>
                  <h1 className="fs-60 grey font-weight-bold">
                 We build bridges <br />between <span className='grey2'>companies <br />and customers</span>
                 </h1>
                  </div>
                 
                 </div>
                
           </div>
         </div>
       </section>
       

       <section className=" boer">
       <div className="img">
              <img src="../../../assets/images/image.png" alt=""  className='img-fluid'/>
            </div>
       </section>
    
       <section className="p-lg-3 bg-white brand">
         <div className="container d-lg-flex justify-content-between ">
         <div className="p-lg-5 aco-weare " data-aos={"fade-up"}>
           <h2 className="grey2 p-lg-5 fs-45 font-weight-bold ">We are <br />
           <span className="cs-aco-red fs-65">Consultants</span></h2>
         </div>
             <div className='p-lg-5' data-aos={"fade-down"}> 
              <p className='black fs-16 font-weight-bold'>We are tech enthusiasts, data geeks, process mavens, delivery strategists and industry experts focused on helping you grow and achieve your goals. We are curious, driven and love to tackle the big challenges that make a difference. We go over and beyond for our clients and teammates.</p>

              <p className='grey2 fs-16 pt-1'>A & co consulting is an innovation driven consultancy that harnesses the power of technology to provide sustainable and profitable solutions to clients world wide across various industries. We help organizations strategize, design, develop, implement and manage technological systems that drive revenue increase and growth to achieve goals.If you are ready to innovate and revolutionize your business, A & Co can help envision, execute and elevate you to the next level using the latest technologies. We recognize that impact is not created alone and together we can make history.</p>
             </div>
         </div>
       </section>

       <section className=" border">
          <div className="ui-wrapper-large">
            <div className="container">
              <div className="text-center">
                <div className='aco-weare'>
                <h1 className="cs-aco-red mb-3 fs-50 font-weight-bold" data-aos={"fade-left"}>
                  <span className='black'>Our</span> Mission
                </h1>
                <img src="../../../../assets/images/rough.png" alt="ee" className="underline-ash" />
                </div>
                <div className="row"  data-aos={"fade-right"}>
                   <div className="col-lg-7 col-md-12 mx-auto aco-weare">
                   <p className='fs-16'>Our mission is to create value by leveraging cutting-edge technology solutions to help our clients achieve their business goals and stay ahead in a constantly evolving digital landscape.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" bder">
          <div className="ui-wrapper-large">
            <div className="container">
              <div className="text-center">
                <div className='aco-weare'>
                <h1 className="cs-aco-red mb-3 fs-50 font-weight-bold"  data-aos={"fade-left"}>
                  <span className='black'>Our</span>  Vision
                </h1>
                <img src="../../../../assets/images/rough.png" alt="ee" className="underline-ash" />
                </div>
                <div className="row"  data-aos={"fade-left"}>
                   <div className="col-lg-7 col-md-12 mx-auto aco-weare" >
                   <p className='fs-16'>At A & co consulting, our goal is to be the leading consulting firm, renowned for our innovative and forward-thinking approach to solving complex business challenges and driving growth.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-3 bg-grey brand">
        <div className="container">
              <div className="">
                <div className='aco-weare text-nter'>
                <h1 className="cs-aco-red mb-3 fs-50 font-weight-bold text-enter"  data-aos={"fade-right"}>
                  <span className='black'>Our</span>  Values
                </h1>
                <img src="../../../../assets/images/rough.png" alt="ee" className="underline-ash" />
                </div>
                <div className="row"  data-aos={"fade-left"}>
                   <div className="col-lg-7 col-md-12 mx-uto aco-weare">
                   <p className='fs-16 black p-0'  >Our values are the driving force of each decision we make and the backbone of our culture.</p>
                   </div>
                </div>
              </div>
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
            <div className="row mt-4 ">
                  <div className="col-lg-3 col-md-6 col-sm-12 aco-weare"  data-aos={"fade-up"}>
                    <p className='font-weight-bold black px-5 '>Innovation</p>
                    <p className='grey2 font-weight-light text-start fs-13 px-5'>LWe embrace new ideas, emerging technologies, and creative solutions to drive growth and stay ahead of the curve.</p>
                  </div>
            
                  <div className="col-lg-3 col-md-6 col-sm-12 aco-weare"  data-aos={"fade-down"}>
                    <p className='font-weight-bold black px-5 '>Integrity</p>
                    <p className='grey2 font-weight-light text-start fs-13 px-5'>We operate with the highest standards of honesty, transparency, and ethical behavior, and always act in the best interests of our clients.</p>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 aco-weare"  data-aos={"fade-up"}>
                    <p className='font-weight-bold black px-5 '>Inclusion</p>
                    <p className='grey2 font-weight-light text-start fs-13 px-5'>We value diversity and believe that a variety of perspectives, backgrounds, and experiences are essential to driving innovation and delivering exceptional results.</p>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 aco-weare"  data-aos={"fade-down"}>
                    <p className='font-weight-bold black px-5 '>Fun</p>
                    <p className='grey2 font-weight-light text-start fs-13 px-5'>Emphasize a positive and enjoyable work environment, recognizing the value of humor and levity in fostering creativity and community.</p>
                  </div>
            </div>
          
        </section>

       <Footer />
   </>
  )
}
