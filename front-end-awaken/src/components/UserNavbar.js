import React, { useContext } from "react";
import { Link } from "react-router-dom"
import { UserContext } from '../context/UserContext';
import Welcome from './Welcome';

const UserNavbar = () => {
  const { logout } = useContext(UserContext)

  const logoutUser = () => {
    fetch('/logout', { 
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(() => {
      logout() 
    })
  }
  
  return (
    <div className="container-xx1">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark m-3">
        <div className="container-xx1">
        <Link className="navbar-brand" to="/home">
          <span className ="fw-bold text-secondary">Awaken</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>
        <div className="collapse navbar-collapse" id="main-nav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-danger active" aria-current="page" to="/books">Book List</Link>
            </li>
            <Welcome />
            <li className="nav-item">
              <Link className="nav-link active" to="#" onClick={logoutUser}>Log Out</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default UserNavbar;