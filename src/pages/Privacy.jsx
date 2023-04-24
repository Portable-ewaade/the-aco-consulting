import React, {useEffect} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";



const Privacy = () => {


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
       {/* section-1 */}
    

        <section className="p-5">
          <div className="ui-wrapper-large" data-aos={"zoom-in"}>
            <div className="container">
              <div className="row">
                <div className="col-lg-8  mx-auto">
                  <div className='aco-ready'>
                    <h1 className="fs-30 font-weight-bold">
                      Privacy Policy
                    </h1>
                    <h3 className="fs-18 font-weight-bold">
                    Introduction
                    </h3>
                    <h5 className="fs-16 font-weight-medium">
                    This Policy is intended to help you understand: 
                    </h5>
                    <ul>
                        <li>- why we collect your personal data;</li>
                        <li>- why we collect your personal data;</li>
                        <li>- why we collect your personal data;</li>
                        <li>- why we collect your personal data;</li>
                        <li>- why we collect your personal data;</li>
                        <li>- why we collect your personal data;</li>
                    </ul>

                    <p className='black mt-3 fs-17'>
                    Relevant Software LLC  is located in Ukraine. 

                    We act as a data controller in relation to your personal data. However, we act as data processors with respect to the data processing activities we carry out on behalf of our clients.

                    </p>
                    <p className='black mt-3 fs-17'>
                    Relevant Software LLC (“we”, “us”, “our”, “Company”)values your privacy and therefore provides you with the information on the company’s privacy practices. On this page, you can learn about the information about you we collect while you interact with Relevant Software LLC, what for and how it is used, stored, disclosed etc.
                    </p>

                    <p className='black mt-3 fs-17'>
                    This Privacy Policy (“Policy”) describes how we handle the data you provide us with through the website https://relevant.software/ (“Site”), email and our social media accounts such as Facebook and LinkedIn (“social media accounts”). Such treatment may include, but is not limited to, the following:
                    </p>
                    <ul>
                        <li> - collection, </li>
                        <li> - collection, </li>
                        <li> - collection, </li>
                        <li> - collection, </li>
                        <li> - collection, </li>
                        <li> - collection, </li>
                    </ul>
                   
                  </div>
                  <div>
                  
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-lg-8  mx-auto">
                  <div className='aco-ready'>
                    <h1 className="fs-30 font-weight-bold mrgt2">
                      Data we Collect
                    </h1>
                    <ul>
                        <li>- why we collect your personal data;</li>
                        <li>- why we collect your personal data;</li>
                        <li>- why we collect your personal data;</li>
                        <li>- why we collect your personal data;</li>
                        <li>- why we collect your personal data;</li>
                        <li>- why we collect your personal data;</li>
                    </ul>

                    <p className='black mt-3 fs-17'>
                    Relevant Software LLC  is located in Ukraine. 

                    We act as a data controller in relation to your personal data. However, we act as data processors with respect to the data processing activities we carry out on behalf of our clients.

                    </p>
                    <p className='black mt-3 fs-17'>
                    Relevant Software LLC (“we”, “us”, “our”, “Company”)values your privacy and therefore provides you with the information on the company’s privacy practices. On this page, you can learn about the information about you we collect while you interact with Relevant Software LLC, what for and how it is used, stored, disclosed etc.
                    </p>

                    <p className='black mt-3 fs-17'>
                    This Privacy Policy (“Policy”) describes how we handle the data you provide us with through the website https://relevant.software/ (“Site”), email and our social media accounts such as Facebook and LinkedIn (“social media accounts”). Such treatment may include, but is not limited to, the following
                    This Privacy Policy (“Policy”) describes how we handle the data you provide us with through the website https://relevant.software/ (“Site”), email and our social media accounts such as Facebook and LinkedIn (“social media accounts”). Such treatment may include, but is not limited to, the following:
                    This Privacy Policy (“Policy”) describes how we handle the data you provide us with through the website https://relevant.software/ (“Site”), email and our social media accounts such as Facebook and LinkedIn (“social media accounts”). Such treatment may include, but is not limited to, the following:
                    </p>
                   
                  </div>
                  <div className='aco-ready'>
                    <h1 className="fs-30 font-weight-bold mrgt2">
                      Data we Collect
                    </h1>
                    <ul>
                        <li>- why we collect your personal data;</li>
                        <li>- why we collect your personal data;</li>
                        <li>- why we collect your personal data;</li>
                        <li>- why we collect your personal data;</li>
                        <li>- why we collect your personal data;</li>
                        <li>- why we collect your personal data;</li>
                    </ul>

                    <p className='black mt-3 fs-17'>
                    Relevant Software LLC  is located in Ukraine. 

                    We act as a data controller in relation to your personal data. However, we act as data processors with respect to the data processing activities we carry out on behalf of our clients.

                    </p>
                    <p className='black mt-3 fs-17'>
                    Relevant Software LLC (“we”, “us”, “our”, “Company”)values your privacy and therefore provides you with the information on the company’s privacy practices. On this page, you can learn about the information about you we collect while you interact with Relevant Software LLC, what for and how it is used, stored, disclosed etc.
                    </p>

                    <p className='black mt-3 fs-17'>
                    This Privacy Policy (“Policy”) describes how we handle the data you provide us with through the website https://relevant.software/ (“Site”), email and our social media accounts such as Facebook and LinkedIn (“social media accounts”). Such treatment may include, but is not limited to, the following
                    This Privacy Policy (“Policy”) describes how we handle the data you provide us with through the website https://relevant.software/ (“Site”), email and our social media accounts such as Facebook and LinkedIn (“social media accounts”). Such treatment may include, but is not limited to, the following:
                    This Privacy Policy (“Policy”) describes how we handle the data you provide us with through the website https://relevant.software/ (“Site”), email and our social media accounts such as Facebook and LinkedIn (“social media accounts”). Such treatment may include, but is not limited to, the following:
                    </p>
                   
                  </div>
                  <div className='aco-ready'>
                    <h1 className="fs-30 font-weight-bold mrgt2">
                      Data we Collect
                    </h1>
                    <ul>
                        <li>- why we collect your personal data;</li>
                        <li>- why we collect your personal data;</li>
                        <li>- why we collect your personal data;</li>
                        <li>- why we collect your personal data;</li>
                        <li>- why we collect your personal data;</li>
                        <li>- why we collect your personal data;</li>
                    </ul>

                    <p className='black mt-3 fs-17'>
                    Relevant Software LLC  is located in Ukraine. 

                    We act as a data controller in relation to your personal data. However, we act as data processors with respect to the data processing activities we carry out on behalf of our clients.

                    </p>
                    <p className='black mt-3 fs-17'>
                    Relevant Software LLC (“we”, “us”, “our”, “Company”)values your privacy and therefore provides you with the information on the company’s privacy practices. On this page, you can learn about the information about you we collect while you interact with Relevant Software LLC, what for and how it is used, stored, disclosed etc.
                    </p>

                    <p className='black mt-3 fs-17'>
                    This Privacy Policy (“Policy”) describes how we handle the data you provide us with through the website https://relevant.software/ (“Site”), email and our social media accounts such as Facebook and LinkedIn (“social media accounts”). Such treatment may include, but is not limited to, the following
                    This Privacy Policy (“Policy”) describes how we handle the data you provide us with through the website https://relevant.software/ (“Site”), email and our social media accounts such as Facebook and LinkedIn (“social media accounts”). Such treatment may include, but is not limited to, the following:
                    This Privacy Policy (“Policy”) describes how we handle the data you provide us with through the website https://relevant.software/ (“Site”), email and our social media accounts such as Facebook and LinkedIn (“social media accounts”). Such treatment may include, but is not limited to, the following:
                    </p>
                   
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

export default Privacy
