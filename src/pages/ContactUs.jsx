import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  // init("user_xxxxxxxxxxxxxxxxxxx");
      const form = useRef();
    
      const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_nz3wuzn", "template_lsy4g5t", form.current, "q5csQGKeI6w3R0Til").then(
          (result) => {
            alert("Message Sent Successfully");
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      };
      
  return (


    <>
    <Navbar />
    
        {/* start a conversation */}
        <section className="py-4 conversation">
          <div className="ui-wrapper-medium">
            <div className="container">
              <div className="row">
              <div className="col-lg-4 col-md-12 offset-lg-1 mt-5">
                  <form className="mt-5 aco-weare" onSubmit={handleSubmit} ref={form}>
                    <h1 className='font-weight-bold fs-55'>Get in Touch</h1>
                    <p className='fs-16 grey mb-5 font-weight-light'>Our friendly team would love to hear from you</p>
                    
                    <div className="form-group fs-11 grey font-weight-medium">
                      <label htmlFor="inputFullName">Full name</label>
                      <input type="text" className="form-control p-2 mb-3" name="user_name"  />
                    </div>
                    
                    <div className="form-group fs-11 grey font-weight-medium">
                      <label htmlFor="inputEmailAddress">Email address</label>
                      <input type="email" className="form-control p-2 mb-3 " name="user_email" />
                    </div>
                    <div class="form-group mb-3 fs-11 grey font-weight-medium">
                      <label for="FormControlTextarea1">Leave a message</label>
                      <textarea class="form-control" id="inputmessage4"
                       name="message" rows="7"></textarea>
                    </div>
                    <button className="large-btn btn-lg mt-2 fs-12  font-weight-light" value="Send" type="submit">Get in Touch <i class="bi bi-arrow-right"></i></button>
                  </form>
                </div>


                <div className="col-lg-6 col-md-12 ">
                  <div className="card-body text2 px-5 py-5 ">
                    <div>
                      <p className='fs-16'>01</p>
                      <h4 className='fs-15 font-weight-bold'>Cloud <br /> Governance</h4>
                      <p  className='fs-11 w-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,.</p>
                    </div>
                    <div>
                    <p className='fs-16'>02</p>
                    <h4 className='fs-15 font-weight-bold'>Cloud <br /> Governance</h4>
                    <p className='fs-11 w-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,.</p>
                    </div>
                    <div>
                    <p className='fs-16'>03</p>
                    <h4 className='fs-15 font-weight-bold'>Cloud <br /> Governance</h4>
                    <p className='fs-11 w-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum sed eaque laudantium vitae,.</p>
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
