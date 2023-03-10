import React from 'react';

const Header = () => {
 
  return (
    <section id="header">
      <div className="container-flex pt-3 pb-3 pe-3 ps-3 bg-warning border-dark">
        <header className="masthead text-center text-white pt-3 pb-3">
          <div className="masthead-content">
              <div className="container px-5">
                  <h1 className="masthead-heading mb-0 fw-bold">AWAKEN</h1>
                  <h2 className="masthead-subheading mb-0 fw-bolder ">Social Justice Book Club</h2>
              </div>
          </div>
          <div className="bg-circle-1 bg-circle"></div>
          <div className="bg-circle-2 bg-circle"></div>
          <div className="bg-circle-3 bg-circle"></div> 
          <div className="bg-circle-4 bg-circle"></div>
        </header>
      </div>
    </section>
  )
}

export default Header;