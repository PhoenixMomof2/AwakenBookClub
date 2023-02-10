import React from 'react';

const Header = () => {
  // console.log("I'm in the Header Component")
  return (
    <div className="container-xxl-flex pt-5 pb-5 pe-3 ps-3 bg-warning border-dark">
      <header className="masthead text-center text-white pt-3 pb-3">
        <div className="masthead-content">
            <div className="container px-5">
                <h1 className="masthead-heading mb-0 fw-bold">Awaken</h1>
                <h2 className="masthead-subheading mb-0 fw-bolder ">Social Justice Book Club</h2>
            </div>
        </div>
        <div className="bg-circle-1 bg-circle"></div>
        <div className="bg-circle-2 bg-circle"></div>
        <div className="bg-circle-3 bg-circle"></div> 
        <div className="bg-circle-4 bg-circle"></div>
      </header>
    </div>
  )
}

export default Header;