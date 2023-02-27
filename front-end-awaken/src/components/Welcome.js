import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Welcome = () => {
  const { user, loggedIn } = useContext(UserContext);
  // console.log("I'm in the Welcome Component", user)

  if (!loggedIn) {
    return (
      <h4 className="fw-bolder text-warning pe-5 justify-content-start">
        <i className="bi bi-book-half px-3"></i>Welcome, Reader!
      </h4>
    );
  } else {
    return (
      <h4 className="fw-bolder text-warning pe-5 justify-content-start">
        <i className="bi bi-book-half px-3"></i>Welcome, {user.username}!
      </h4>
    );
  }
};
export default Welcome;
