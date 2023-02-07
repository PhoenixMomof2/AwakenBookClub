import React, { useContext } from 'react';
import { UserContext, UserProvider } from '../context/UserContext';
import { redirect, Link } from 'react-router-dom';
import Welcome from './Welcome';


const Navbar = () => {
  console.log("I'm in the Navbar Component")
  const { signup, login, logout, loggedIn } = useContext(UserContext)
  
  const logoutUser = () => {
    fetch('/logout', { 
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(() => {
      logout()
      redirect('/home')
    })
  }
  if (loggedIn) {
      return (
      <UserProvider>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container px-5">
              {/* <a className="navbar-brand" href="/groups/:username">My Reading Groups</a> */}
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ms-auto">
                  <li><Link to="/signup" onClick={signup}><Welcome /></Link></li>
                  <li><Link to="/logout" onClick={logoutUser}>Log Out</Link></li>
                  </ul>
                </div>
            </div>
          </nav>
        </div>
      </UserProvider>
      )
  } else {
      return (
        <UserProvider>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
              <div className="container px-5">
                <li><Link to="/home" className="navbar-brand">Home</Link></li>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                      <li><Link to="/signup" onClick={signup}><Welcome />Please sign up</Link></li>
                      <li><Link to="/login" onClick={login}>Please login</Link></li>
                    </ul>
                  </div>
              </div>
            </nav>
          </div>
        </UserProvider>
      )
  }
}
export default Navbar;