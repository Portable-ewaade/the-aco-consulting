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
                                <div className="maintenance_contain">
                                    <span className="pp-infobox-title-prefix fs-30 white">WE ARE COMING SOON</span>
                 
                                    <div className="pp-infobox-description white">
                                        <p>We are working on updates. We will be back up shortly!</p>			
                                    </div>    
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
