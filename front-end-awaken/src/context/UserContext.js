// src/context/UserContext.js
import React, { createContext, useState, useEffect } from "react";

// Create context
const UserContext = createContext();

// Create provider
function UserProvider ({ children }) {
  console.log("I'm in the UserProvider")
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  // const [errors, setErrors] = useState([])
console.log(user, loggedIn)
  useEffect(() => {
      fetch("/me")
      .then(res => res.json())
      .then(data => {
        console.log("I'm in the UserContext fetch")
        setUser(data)
        // data.error ? setLoggedIn(false) : setLoggedIn(true)
      })
  }, []);

  const login = (user) => {
    setUser(user);
    setLoggedIn(true);
  };

  const logout = () => {
    setUser({});
    setLoggedIn(false);
  };

  const signup = (user) => {
    setUser(user);
    setLoggedIn(true);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, signup, loggedIn }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };