import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Welcome = () => {
  const { user, loggedIn } = useContext(UserContext);
  console.log("I'm in the Welcome Component", user)

  if (!loggedIn) {
    return( <li className="nav-item fw-bolder text-warning">Welcome, Reader!</li> )
  } else {
    return ( <li className="nav-item fw-bolder text-warning">Welcome, {user.username}!</li> )
  }
}
export default Welcome;