// src/context/UserContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import { BookContext } from "../context/BookContext";

// Create context
const UserContext = createContext()

// Create provider
function UserProvider({ children }) {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [errors, setErrors] = useState([])
  const books = useContext(BookContext)

  useEffect(() => {
    fetch("/me")
      .then((res) => res.json())
      .then((user) => {
        if (user.id) {
          setUser(user);
          setLoggedIn(true); //keeps user logged in when page is refreshed
        }
      })
  }, [])

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
      })
  }, [])

  // Updating user books state to add new book.
  const handleAddNewUserBook = (newBook) => {
    setUser({ ...user, books: [...books, newBook] })
  }

  // Updating user comments state to add new comment. 
  const handleAddNewUserComment = (updatedUserBooks) => {
    // setUser({ ...user, books: [...books, newBook] })
    const updatedUser = {...user, books: updatedUserBooks}    
    setUser(updatedUser)
    console.log(updatedUser, "She did that! -else")
  }

  // Updating user state after a user comments on a book not associated with them yet.
  const handleAddNewUserBookAfterNewComment = (updatedUserBooks) => {  
    const updatedUser = {...user, books: updatedUserBooks}
    setUser(updatedUser)
    console.log(updatedUser, "She did that! -if")    
  }

  // Updating user comments state after editing a comment.
  const handleEditUserComment = (updatedComments) => {
    // const book = user.books.find(book => book.id === updatedComment.book_id)
    // const updatedComments = book.comments.map((c) =>
    //   c.id === updatedComment.id ? updatedComment : c
    // );
    // setUser({ ...user, books: {...books, comments: updatedComments }});
    const updatedUser = {...user, comments: updatedComments}
    setUser(updatedUser)
  };
  
  // Updating user comments state after deleting a comment.
  const handleDeleteUserComment = (deletedComment) => {
    const book = user.books.find(book => book.id === deletedComment.book_id)
    const updatedBook = {...book, comments: book.comments.filter(
        (c) => c.id !== deletedComment.id
      )}
    const updatedBooks = user.books.map((book) =>
       book.id === updatedBook.id ? updatedBook : book
     )
// debugger
    setUser({ ...user, books: updatedBooks });
  };

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
    <UserContext.Provider
      value={{
        user,
        users,
        login,
        logout,
        signup,
        loggedIn,
        setErrors,
        errors,
        handleAddNewUserBook,
        handleAddNewUserComment,        
        handleEditUserComment,
        handleDeleteUserComment,
        handleAddNewUserBookAfterNewComment        
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };

//add the 