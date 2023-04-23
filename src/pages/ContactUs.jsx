import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React, { useRef, useState, useEffect} from "react";
import emailjs from "@emailjs/browser";
import Message from '../components/Message';
import AOS from "aos";
import "aos/dist/aos.css";

export const ContactUs = () => {
  // init("user_xxxxxxxxxxxxxxxxxxx");
  const [loading, setLoading] = useState();
  const [step, setStep] = useState(0);

      const form = useRef();
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm("service_nz3wuzn", "template_lsy4g5t", form.current, "q5csQGKeI6w3R0Til").then(
          (result) => {
            setStep(1);
            // alert("Message Sent Successfully");
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      };
      

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
    
        {/* start a conversation */}
        <section className="py-4 conversation">
          <div className="ui-wrapper-medium">
            <div className="container">
              <div className="row">
                <div className="2">
                    <div className="row">
                    <div className="col-lg-4 col-md-12 mt-5 offset-lg-1">
                  <form className="mt-5 aco-weare" onSubmit={handleSubmit} ref={form}>
                    <h1 className='font-weight-bold fs-55'>Get in Touch</h1>
                    <p className='fs-16 grey mb-5 font-weight-light'>Our friendly team would love to hear from you</p>
                    
                   {
                    step === 0 &&
                    <>
                    <div className="form-group fs-11 grey font-weight-medium">
                      <label htmlFor="inputFullName">Full name <span className='cs-aco-red fs-15'>*</span></label>
                      <input type="text" className="form-control p-2 mb-3" name="user_name"  />
                    </div>
                  
                    <div className="form-group fs-11 grey font-weight-medium">
                      <label htmlFor="inputEmailAddress">Email address <span className='cs-aco-red fs-15'>*</span></label>
                      <input type="email" className="form-control p-2 mb-3 " name="user_email" />
                    </div>
                    <div className="form-group mb-3 fs-11 grey font-weight-medium">
                      <label htmlFor="FormControlTextarea1">Leave a message <span className='cs-aco-red fs-15'>*</span></label>
                      <textarea className="form-control" id="inputmessage4"
                      name="message" rows="7"></textarea>
                    </div>
                        {
                            loading &&
                            <button className="large-btn btn-lg mt-2 fs-12 csbg-aco-red   font-weight-light" value="Send" type="submit">Sending... <i className="bi bi-arrow-right"></i></button>
                        }
                        {
                        !loading &&
                        <button className="large-btn btn-lg mt-2 fs-12 csbg-aco-red   font-weight-light" value="Send" type="submit">Get in Touch <i className="bi bi-arrow-right"></i></button>
                        }
                  </>
                    
                   }

                   
                      {
                                        step === 1 &&
                                        <>
                                            <Message 
                                            message={`Thank you for reaching out!  We will get back to you shortly!`} 
                                            status="success"
                                            lottieSize={100}
                                            loop={false}
                                            buttonText='Go back'
                                            />
                                        </>
                                    }

                  </form>


                </div>


                <div className="col-lg-6 col-md-12  ">
                <h1 className='txt2 font-weight-bold'>What to <span className='cs-aco-red'>Expect</span></h1>
                  <div className="card-body text2 px-5 py-5">
                    <div>
                      <p className='fs-16'>01</p>
                      <h4 className='fs-15 font-weight-bold'>Analysis &  Assessment</h4>
                      <p  className='fs-13'>We attentively listen to understand your business goals and identify the best technology solutions for your needs.</p>
                    </div>
                    <div>
                    <p className='fs-16'>02</p>
                    <h4 className='fs-15 font-weight-bold'>Project Planning</h4>
                    <p className='fs-13'>In this crucial phase, we consolidate all features and requirements, establish priorities and set timelines.</p>
                    </div>
                    <div>
                    <p className='fs-16'>03</p>
                    <h4 className='fs-15 font-weight-bold'>Design Visualization</h4>
                    <p className='fs-13'>We define how the product functions and enable you to see and interact with your solution before it is built.</p>
                    </div>
                    <div>
                    <p className='fs-16'>04</p>
                    <h4 className='fs-15 font-weight-bold'>Development & Implementation</h4>
                    <p className='fs-13'>At this stage, we bring your vision to life using the specified  technology stack and UI/UX designs.</p>
                    </div>

                    <div>
                    <p className='fs-16'>05</p>
                    <h4 className='fs-15 font-weight-bold'>Quality Assurance & Testing</h4>
                    <p className='fs-13'>Our team of experts  ensures that your solution is secure and reliable through rigorous manual and automated testing to prevent bugs.</p>
                    </div>
                    <div>
                    <p className='fs-16'>06</p>
                    <h4 className='fs-15 font-weight-bold'>Launch & Support</h4>
                    <p className='fs-13'>We not only bring your vision to life but are eager to ensure its growth and continuous evolution.</p>
                    </div>
                  </div>
                </div>
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

export default ContactUs
