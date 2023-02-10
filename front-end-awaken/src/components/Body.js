import React from 'react';
import Footer from './Footer';
import Stamped from '../images/Stamped.jpeg';
import HowToBeAntiRacist from '../images/HowToBeAntiRacist.jpeg';
import WhiteLikeMe from '../images/WhiteLikeMe.jpeg';

const Body = () => {
    // console.log("I'm in the Body Component")
  return ( 
    <div className="container-xxl-flex bg-warning ">
        {/* <!-- Content section 1--> */}
          <section id="scroll">
              <div className="container-xxl-flex px-5">
                  <div className="row gx-5 align-items-center">
                      <div className="col-lg-6 order-lg-2">
                          <div className="p-5"><img className="img-fluid rounded-circle" src={Stamped} alt="..." /></div>
                      </div>
                      <div className="col-lg-6 order-lg-1">
                          <div className="p-3">
                              <h2 className="display-4 text-white bg-dark">For those about to awaken...</h2>
                              <p className="text-dark bg-danger">When you have been asleep, complicit, or so neutral that you aren't even involved in the conversation, it can be very scary.  But join this supportive community and take it one page at a time.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        {/* <!-- Content section 2--> */}
          <section>
              <div className="container-xxl-flex px-5">
                  <div className="row gx-5 align-items-center">
                      <div className="col-lg-6">
                          <div className="p-5"><img className="img-fluid rounded-circle" src={HowToBeAntiRacist} alt="..." /></div>
                      </div>
                      <div className="col-lg-6">
                          <div className="p-3">
                              <h2 className="display-4 text-white bg-dark">Thank you for your courage!</h2>
                              <p className="text-dark bg-success">Black lives matter. History matters. Together, we can dismantle systemic racism.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        {/* <!-- Content section 3--> */}
          <section>
              <div className="container-xxl px-5">
                  <div className="row gx-5 align-items-center">
                      <div className="col-lg-6 order-lg-2">
                          <div className="p-3"><img className="img-fluid rounded-circle" src={WhiteLikeMe} alt="..." /></div>
                      </div>
                      <div className="col-lg-6 order-lg-1">
                          <div className="p-5">
                              <h2 className="display-4 text-white bg-dark" >It's okay to not be okay!</h2>
                              <p className="text-white bg-danger">Unlearning implicit bias starts here.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  )
}

export default Body;