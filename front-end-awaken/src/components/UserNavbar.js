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
      <nav className="navbar nav-pills navbar-expand-lg navbar-dark bg-dark">
        <div className="container-xxl">
        <Link className="navbar-brand fw-bold text-secondary" to="/home">
        <i class="bi bi-unity"></i> AWAKEN - Social Justice Book Club
        </Link>
        <Welcome />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>
        <div className="collapse navbar-collapse justify-content-end align-center me-4" id="main-nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link my-2 mx-1 active text-center text-light fw-bolder" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link my-2 mx-1 active text-center text-light fw-bolder" aria-current="page" to="/books">Book List</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link my-2 mx-1 active text-center text-light fw-bolder" aria-current="page" to="#" onClick={logoutUser}>Log Out</Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default UserNavbar;