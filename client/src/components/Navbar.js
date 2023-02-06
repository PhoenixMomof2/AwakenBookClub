import React, { useContext } from 'react';
import { UserContext, UserProvider } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Welcome from './Welcome';
import BookList from './BookList';

const Navbar = () => {
  const { login, logout, signup, loggedIn } = useContext(UserContext)
  const navigate = useNavigate()

  const logoutUser = () => {
    fetch('/logout', { 
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(() => {
      logout()
      navigate('/home')
    })
  }
  if (loggedIn) {
      return (
      <UserProvider>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container px-5">
              <a className="navbar-brand" href="/groups/:username">My Groups</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ms-auto">
                  <li className="nav-item"><a className="nav-link" href="/books"><BookList />Books</a></li>
                  <li className="nav-item"><a className="nav-link" href="/signup"><Welcome /></a></li>
                  <li className="nav-item"><a className="nav-link" href="/logout" onClick={logoutUser}>Log Out</a></li>
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
                <a className="navbar-brand" href="/home">Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a className="nav-link" href="/books"><BookList />Books</a></li>
                    <li className="nav-item"><a className="nav-link" href="/signup"><Welcome /></a></li>
                    <li className="nav-item"><a className="nav-link" href="/signup" onClick={signup}>Sign Up</a></li>
                    <li className="nav-item"><a className="nav-link" href="/login" onClick={login}>Log In</a></li>
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