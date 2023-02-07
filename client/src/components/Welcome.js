import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { NavLink } from 'react-router-dom';

const Welcome = () => {
  console.log("I'm in the Welcome Component")
  const { user, loggedIn } = useContext(UserContext);

  if (!loggedIn) {
    return <NavLink to="signup">Sign Up</NavLink>
  } else {
    return <li className="nav-item">Welcome, {user.username}!</li>
  } 
}

export default Welcome;