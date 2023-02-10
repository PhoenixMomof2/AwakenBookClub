import React, { useContext } from "react";
import { UserContext } from '../context/UserContext';
import UserNavbar from "./UserNavbar";
import Welcome from './Welcome';

const Navbar = () => {
  // console.log("I'm in the Navbar Component")
  const { loggedIn, signup, login  } = useContext(UserContext)
  
  if (!loggedIn) {
      return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark p-3">
        <div className="container-xxl">
          <a className="navbar-brand" href="/home">
            <span className ="fw-bold text-secondary">Awaken</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon justify-content-end"></span>
          </button>
          </div>
          <Welcome />
          <div className="collapse navbar-collapse justify-content-center" id="main-nav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link text-danger active" aria-current="page" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/signup" onClick={signup}>Signup</a>
              </li>
              <li className="nav-item my-2">
                <a className="nav-link active" aria-current="page" href="/login" onClick={login}>Login</a>
              </li>
            </ul>
          </div>
        </nav>
      )
  } else {
      return <UserNavbar /> 
  }
}

export default Navbar;