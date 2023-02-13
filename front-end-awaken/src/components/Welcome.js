import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Welcome = () => {
  const { user, loggedIn } = useContext(UserContext);
  console.log("I'm in the Welcome Component", user)

  if (!loggedIn) {
    return( <span className="nav-item fw-bolder text-warning pe-5 justify-content-start">Welcome, Reader!</span> )
  } else {
    return ( <span className="nav-item fw-bolder text-warning pe-5 justify-content-start">Welcome, {user.username}!</span> )
  }
}
export default Welcome;