import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from '../context/UserContext';
import UserNavbar from "./UserNavbar";
import Welcome from './Welcome';

const Navbar = () => {
  // console.log("I'm in the Navbar Component")
  const { loggedIn } = useContext(UserContext)
  
  if (!loggedIn) {
      return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark p-3">
        <div className="container-xxl">
          <Link className="navbar-brand" to="/home">
            <span className ="fw-bold text-secondary">Awaken</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon justify-content-end"></span>
          </button>
          </div>
          <Welcome />
          <div className="collapse navbar-collapse justify-content-center" id="main-nav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link text-danger active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-danger active" aria-current="page" to="/books">Book List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
              </li>
              <li className="nav-item my-2">
                <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
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