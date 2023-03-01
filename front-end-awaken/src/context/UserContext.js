// src/context/UserContext.js
import React, { createContext, useState, useEffect } from "react";

// Create context
const UserContext = createContext();

// Create provider
function UserProvider ({ children }) {
  const [users, setUsers] = useState([])
  // const [user_library, setUser_Library] = useState([])
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [errors, setErrors] = useState([])
  
  useEffect(() => {
      fetch("/me")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setLoggedIn(data)
      })
  }, [])

  useEffect(() => {
    fetch("/users")
    .then(res => res.json())
    .then(data => {
      setUsers(data)
    })
  }, [])

  // const addToLibrary = (book) => {
  //   console.log("I have a new book.")
  //   setUser_Library(user_library << book)
  // }

  const login = (user) => {
    setUser(user)
    setLoggedIn(true)
  }

  const logout = () => {
    setUser({})
    setLoggedIn(false)
  }

  const signup = (user) => {
    setUser(user)
    setLoggedIn(true)
  }

  return (
    <UserContext.Provider value={{ user, users, login, logout, signup, loggedIn, setErrors, errors }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };