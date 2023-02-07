import React from 'react';

const Header = () => {
  console.log("I'm in the Header Component")
  return (
    <div>
      <header className="masthead text-center text-white">
        <div className="masthead-content">
            <div className="container px-5">
                <h1 className="masthead-heading mb-0">Awaken</h1>
                <h2 className="masthead-subheading mb-0">Social Justice Book Club</h2>
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