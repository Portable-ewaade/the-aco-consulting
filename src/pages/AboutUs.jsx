import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const AboutUs = () => {
  return (
    <>
   <Navbar />
   
      <section className="home-hero  text-light pt-5 welcome">
         <div className="ui-wrapper-large ">
           <div className="container pt-4 text-start justify-content-center ">
           <div className='d-lg-flex'>
                  <div>
                    <img src="../../../../assets/images/highlight.png" alt=""  style={{ height: 50, position: "relative", left: "-20px", top: "15px"}}/>
                  <h1 className="fs-60 grey font-weight-bold">
                 We build bridges <br />between <span className='grey2'>companies <br />and customers</span>
                 </h1>
                  </div>
                  <div>
                  <p className='grey fs-16 text '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,ut nam laboriosam distinctio ipsa saepe possimus provident esse nesciunt facere </p>
                  </div>
                 </div>
                
           </div>
         </div>
       </section>
       

       <section className=" border">
       <div className="img">
              <img src="../../../assets/images/image.png" alt=""  className='img-fluid'/>
            </div>
       </section>
    
       <section className="p-lg-3 bg-white brand">
         <div className="container d-lg-flex justify-content-between ">
         <div className="p-lg-5 ">
           <h2 className="grey2 p-lg-5 fs-45 font-weight-bold ">We are <br />
           <span className="line--acoo fs-65">Consultants</span></h2>
         </div>
             <div className='p-lg-5'> 
              <p className='black fs-13 font-weight-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,ut nam laboriosam distinctio ipsa saepe possimus provident esse nesciunt facere </p>

              <p className='grey2 fs-13 pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,ut nam laboriosam distinctio ipsa saepe possimus provident esse nesciunt facere  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,ut nam laboriosam distinctio ipsa saepe possimus provident esse nesciunt facere  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,ut nam laboriosam distinctio ipsa saepe possimus provident esse nesciunt facere </p>
             </div>
         </div>
       </section>

       <Footer />
   </>
  )
}
