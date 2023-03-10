// src/context/UserContext.js
import React, { createContext, useState, useEffect } from "react";

// Create context
const UserContext = createContext();

// Create provider
function UserProvider ({ children }) {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [errors, setErrors] = useState([])
  
  useEffect(() => {
      fetch("/me")
      .then(res => res.json())
      .then(user => 
        {
          if (user.id) {
            setUser(user)
            setLoggedIn(true) //keeps user logged in when page is refreshed
          }      
      })
  }, [])

  useEffect(() => {
    fetch("/users")
    .then(res => res.json())
    .then(data => {
      setUsers(data)
    })
  }, [])

  // Updating user books state to add new book. 
  const handleAddNewUserBook = (newBook) => {
    setUser({...user, books: [...user.books, newBook]});
  };

  // Updating user comments state to add new comment.
  const handleAddNewUserComment = (newComment) => {
    setUser({...user, comments: [...user.comments, newComment]})
  }

  // Updating user comments state after editing a comment.
  const handleEditUserComment = (update) => {
    const updatedComments = user.comments.map((comment) => (comment.id === update.id ? update : comment))
    setUser({...user, comments: updatedComments})
  }

  // Updating user comments state after deleting a comment.
  const handleDeleteUserComment = (id) => {
    const filteredComments = user.comments.filter(comment => comment.id !== id)
    setUser({...user, comments: filteredComments}) 
  }

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
    <UserContext.Provider value={{ user, users, login, logout, signup, loggedIn, 
    setErrors, errors, handleAddNewUserBook, handleAddNewUserComment, handleDeleteUserComment, handleEditUserComment }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };

// comments: [] removed from useState([was here]) on line 9