import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
    <Navbar />
       {/* contact us */}
       <section className="home-hero  text-light pt-5 pb-5 mt-5 welcome " style={{backgroundImage: 'url("../../../../assets/images/contact.png")'}}>
          <div className="ui-wrapper-xxlarge">
            <div className="container mt-5 pt-5 text-center justify-content-center">
              <div className="row">
                <div classname="col-lg-6 col-md-8">
                  <h1 className="fs-60 white font-weight-bold p-5">
                    Contact Us
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* start a conversation */}
        <section className="py-4">
          <div className="ui-wrapper-large">
            <div className="container">
              <div className="row">
                <div className="text-center mx-auto">
                  <h6 className="black fs-35 font-weight-medium mb-4" style={{letterSpacing: '3px'}}>
                    Lets's Start a Conversation
                  </h6>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6  mb-2">
                  <div className="card-body text">
                    <div>
                      <h4>Ask how we can help you:</h4>
                      <h6>See our platform in action</h6>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloribus fuga, suscipit aliquid aperiam veniam!</p>
                    </div>
                    <div>
                      <h6>See our platform in action</h6>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloribus fuga, suscipit aliquid aperiam veniam!</p>
                    </div>
                    <div>
                      <h6>See our platform in action</h6>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloribus fuga, suscipit aliquid aperiam veniam!</p>
                    </div>
                    <div>
                      <h4>Point of contact:</h4>
                      <h6>See our platform in action</h6>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloribus fuga, suscipit aliquid aperiam veniam!</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 offset-md-1   mb-2">
                  <form className="mt-5">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">First Name</label>
                      <input type="text" className="form-control p-2 mb-3" id="firstname" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Last Name</label>
                      <input type="text" className="form-control p-2 mb-3" id="lastname" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Email</label>
                      <input type="password" className="form-control p-2 mb-3" id="email" />
                    </div>
                    <div className="form-group mb-3">
                      <label for="exampleFormControlTextarea1">Message</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
                    </div>
                    <Link className="btn white csbg-aco-red btn-lg p-2 w-100">SEND A MESSAGE</Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
    </>
  )
}

export default Contact
