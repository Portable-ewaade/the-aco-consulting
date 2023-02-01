import React from 'react'

const Maintenance = () => {
  return (
    <section className="hoe-hero  text-light   welcome" style={{backgroundImage: 'url("../../../../assets/images/hero-bg.png")'}}>
          <div className="ui-wrapper-lage">
            <div className="container  text-start justify-content-center">
              <div className="row">
                 <div className="col-lg-10 mx-auto text-center">
               
                     <div className="maintenance">
                     <img src="../../../../assets/images/acoo.png" alt="" className="img-fluid" style={{width: '580px'}} />
                // <div className="maintenance_contain">
                // <span className="pp-infobox-title-prefix fs-30 white">WE ARE COMING SOON</span>
                // <div className="pp-infobox-title-wrapper">
                //     <h3 className="pp-infobox-title white fs-50">The website under maintenance!</h3>
                // </div> 
                <div className="pp-infobox-description white">
                    <p>We are working on updates. We will be back up shortly!</p>			
                </div>    
                {/* <span className="title-text pp-primary-title">We are social</span> */}
                {/* <div className="pp-social-icons pp-social-icons-center pp-responsive-center">
                    <span className="pp-social-icon">
                    <link itemProp="url" href="#" />
                    <a itemProp="sameAs" href="#" target="_blank" title="Facebook" aria-label="Facebook" role="button">
                        <i className="fa fa-facebook" />
                    </a>
                    </span>
                    <span className="pp-social-icon">
                    <link itemProp="url" href="#" />
                    <a itemProp="sameAs" href="#" target="_blank" title="Twitter" aria-label="Twitter" role="button">
                        <i className="fa fa-twitter" />
                    </a>
                    </span>
                    <span className="pp-social-icon">
                    <link itemProp="url" href="#" />
                    <a itemProp="sameAs" href="#" target="_blank" title="Google Plus" aria-label="Google Plus" role="button">
                        <i className="fa fa-google-plus" />
                    </a>
                    </span>
                    <span className="pp-social-icon">
                    <a itemProp="sameAs" href="#" target="_blank" title="LinkedIn" aria-label="LinkedIn" role="button">
                        <i className="fa fa-linkedin" />
                    </a>
                    </span>
                </div> */}
                </div>
            </div>
                 </div>
              </div>
            </div>
        </div>
    </section>

  )
}

export default Maintenance
