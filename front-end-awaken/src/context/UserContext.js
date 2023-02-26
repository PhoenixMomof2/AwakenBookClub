// src/context/UserContext.js
import React, { createContext, useState, useEffect } from "react";

// Create context
const UserContext = createContext();

// Create provider
function UserProvider ({ children }) {

  const [user, setUser] = useState({});
  const [users, setUsers] = useState([])
  const [loggedIn, setLoggedIn] = useState(false);
  const [errors, setErrors] = useState([])

  useEffect(() => {
      fetch("/me")
      .then(res => res.json())
      .then(data => {
        setUser(data)
      })
  }, []);

  useEffect(() => {
    fetch("/users")
    .then(res => res.json())
    .then(data => {
      console.log(data, "I'm in the UserContext fetch")
      setUsers(data)
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
    <UserContext.Provider value={{ user, users, login, logout, signup, loggedIn, setErrors, errors }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };