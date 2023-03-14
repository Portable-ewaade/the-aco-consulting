import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const ContactUs = () => {
  return (
    <>
    <Navbar />
    
        {/* start a conversation */}
        <section className="py-4 conversation">
          <div className="ui-wrapper-medium">
            <div className="container">
              <div className="row">
              <div className="col-md-4 offset-md-1 mt-5">
                  <form className="mt-5">
                    <h1 className='font-weight-bold fs-55'>Get in Touch</h1>
                    <p className='fs-16 grey mb-5 font-weight-light'>Our friendly team would love to hear from you</p>
                    
                    <div className="form-group fs-11 grey font-weight-medium">
                      <label htmlFor="exampleInputEmail1">Full name</label>
                      <input type="text" className="form-control p-2 mb-3" id="firstname" />
                    </div>
                    
                    <div className="form-group fs-11 grey font-weight-medium">
                      <label htmlFor="exampleInputPassword1">Email address</label>
                      <input type="password" className="form-control p-2 mb-3 " id="email" />
                    </div>
                    <div class="form-group mb-3 fs-11 grey font-weight-medium">
                      <label for="exampleFormControlTextarea1">Leave a message</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
                    </div>
                    <button className="large-btn btn-lg mt-2 fs-12 btn2 font-weight-light" type="button">Get in Touch <i class="bi bi-arrow-right"></i></button>
                  </form>
                </div>


                <div className="col-md-6 ">
                  <div className="card-body text2 p-5 ">
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
