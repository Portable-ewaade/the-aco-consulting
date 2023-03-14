import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


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

  return (
    
    <>
    <Navbar />
     
       <section className="home-hero  text-light pt-5 welcome">
          <div className="ui-wrapper-xlarge">
            <div className="container pt-2 text-start">
              <div className="row mx-5">
                <div classname="col-lg-6 col-md-8">
                  
                  <h1 className="fs-60 grey font-weight-bold">
                  Lorem Ipsum Lorem <br /> Lorem Ipsum
                  </h1>
                  <p className='grey fs-16 w-50 grey2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,ut nam laboriosam distinctio ipsa saepe possimus provident esse nesciunt facere </p>
                 
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className=" border">
          <div className="ui-wrapper-large">
            <div className="container">
            <div className="row works">
                  <div className=" d-lg-flex justify-content-between p-5">
                  <div className='px-5'>
                      <p className='fs-16'>01</p>
                      <h4 className='fs-20 font-weight-bold'>Cloud <br /> Governance</h4>
                      <p className=' grey2 fs-14 w-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,.</p>
                    </div>
                    <div className='w-25'>
                     <div className="d-lg-flex justify-content-between">
                      <p className='fs-16'> Lorem Ipsum</p>
                      <p className='fs-16'> Lorem Ipsum</p>
                     </div>
                      <hr  className=' grey2'/>
                      <div className="d-lg-flex justify-content-between">
                      <p  className='fs-16' > Lorem Ipsum</p>
                      <p  className='fs-16'> Lorem Ipsum</p>
                     </div>
                      <hr className='grey2'/>
                      <div className="d-lg-flex justify-content-between">
                      <p  className='fs-16'> Lorem Ipsum</p>
                      
                     </div>
                     <hr className='grey2'/>
                     <div className="d-lg-flex justify-content-between">
                      <p  className='fs-16'> Lorem Ipsum</p>
                     
                     </div>
                      

                    </div>
                  </div>
                 
                  <div className="d-lg-flex justify-content-between p-5">
                  <div className='px-5'>
                      <p className='fs-16'>02</p>
                      <h4 className='fs-20 font-weight-bold'>Software <br /> Devlopemnt</h4>
                      <p  className='fs-14 w-75 grey2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,.</p>
                    </div>
                    <div className='w-25 '>
                     <div className="d-lg-flex justify-content-between">
                      <p className='fs-16'> Lorem Ipsum</p>
                      <p className='fs-16'> Lorem Ipsum</p>
                     </div>
                      <hr  className=' grey2'/>
                      <div className="d-lg-flex justify-content-between">
                      <p  className='fs-16' > Lorem Ipsum</p>
                      <p  className='fs-16'> Lorem Ipsum</p>
                     </div>
                      <hr className='grey2'/>
                      <div className="d-lg-flex justify-content-between">
                      <p  className='fs-16'> Lorem Ipsum</p>
                      
                     </div>
                     <hr className='grey2'/>
                     <div className="d-lg-flex justify-content-between">
                      <p  className='fs-16'> Lorem Ipsum</p>
                     
                     </div>
                      

                    </div>
                  </div>
                 
                </div>
               
                <div className="d-lg-flex justify-content-between p-5">
                  <div className='px-5'>
                      <p className='fs-16'>03</p>
                      <h4 className='fs-20 font-weight-bold'>Retailed <br /> and Commerce</h4>
                      <p  className='fs-14 w-75 grey2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,.</p>
                    </div>
                    
                    <div className='w-25 '>
                     <div className="d-lg-flex justify-content-between">
                      <p className='fs-16'> Lorem Ipsum</p>
                      <p className='fs-16'> Lorem Ipsum</p>
                     </div>
                      <hr  className=' grey2'/>
                      <div className="d-lg-flex justify-content-between">
                      <p  className='fs-16' > Lorem Ipsum</p>
                      <p  className='fs-16'> Lorem Ipsum</p>
                     </div>
                      <hr className='grey2'/>
                      <div className="d-lg-flex justify-content-between">
                      <p  className='fs-16'> Lorem Ipsum</p>
                      
                     </div>
                     <hr className='grey2'/>
                     <div className="d-lg-flex justify-content-between">
                      <p  className='fs-16'> Lorem Ipsum</p>
                     
                     </div>
                      

                    </div>
                  </div>
            </div>
          </div>
        </section>
       
        <section className="p-3 bg-grey brand">
          <div className="container">
          <div className="ui-wrapper-large">
          <div className="">
           <div>
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
            <div className="row ">
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