import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Welcome = () => {
  const { user, signup, loggedIn } = useContext(UserContext);

  if (!loggedIn) {
    return (
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="/signup" onClick={signup}>Welcome Reader</a></li>
        </ul>
      </div>
      )
  } else {
    return (
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="/signup">Welcome, {user.username}!</a></li>
        </ul>
      </div>
    )
  } 
}

export default Welcome;