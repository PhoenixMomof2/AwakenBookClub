import React from 'react';
import Stamped from '../images/Stamped.jpeg';
import HowToBeAntiRacist from '../images/HowToBeAntiRacist.jpeg';
import WhiteLikeMe from '../images/WhiteLikeMe.jpeg';

const Body = () => {

  return ( 
    <section id="body">
        <div className="container-flex bg-warning ">
            <section>
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="p-5"><img className="img-fluid rounded-pill" src={Stamped} alt="..." /></div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="p-5">
                                <h2 className="display-4 text-white bg-dark">For those about to awaken...</h2>
                                <p className="text-dark bg-danger">When you have been asleep, complicit, or so neutral that you aren't even involved in the conversation, taking the first to step to do away with cognitive dissonance can be very scary.  But join this supportive community and take it one page at a time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="p-5"><img className="img-fluid rounded-pill" src={HowToBeAntiRacist} alt="..." /></div>
                        </div>
                        <div className="col-lg-6">
                            <div className="p-5">
                                <h2 className="display-4 text-white bg-dark">Thank you for your courage!</h2>
                                <p className="text-dark bg-success">Black lives matter. History matters. Let us not repeat America's disgraceful history.  Together, we can dismantle systemic racism.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="p-5"><img className="img-fluid rounded-pill" src={WhiteLikeMe} alt="..." /></div>
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
      </section>
  )
}

export default Body;