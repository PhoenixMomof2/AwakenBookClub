// src/context/UserContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import { BookContext } from "../context/BookContext";

// Create context
const UserContext = createContext();

// Create provider
function UserProvider({ children }) {
  // const [users, setUsers] = useState([])
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [errors, setErrors] = useState([]);
  const books = useContext(BookContext);

  useEffect(() => {
    fetch("/me")
      .then((res) => res.json())
      .then((user) => {
        if (user.id) {
          setUser(user);
          setLoggedIn(true); //keeps user logged in when page is refreshed
        }
      });
  }, []);

  // Updating user books state to add new book.
  const handleAddNewUserBook = (newBook) => {
    setUser({ ...user, books: [...books, newBook] });
  };

  // Updating user comments state to add new comment.
  const handleAddNewUserComment = (updatedUser) => {
    setUser(updatedUser);
    console.log(updatedUser, "User update from -else block");
  };

  // Updating user state after a user comments on a book not associated with them yet.
  const handleAddNewUserBookAfterNewComment = (updatedUserBooks) => {
    const updatedUser = { ...user, books: updatedUserBooks };
    setUser(updatedUser);
    console.log(updatedUser, "User update from -if block");
  };

  // Updating user comments state after editing a comment.
  const handleEditUserComment = (updatedUser) => {
    setUser(updatedUser);
    console.log(updatedUser, "user");
  };

  // Updating user comments state after deleting a comment.
  const handleDeleteUserComment = (deletedComment) => {
    const book = user.books.find((book) => book.id === deletedComment.book_id);
    const updatedBook = {
      ...book,
      user_comments: book.user_comments.filter((c) => c.id !== deletedComment.id),
    };
    const updatedBooks = user.books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setUser({ ...user, books: updatedBooks });
    console.log(deletedComment, "handleDeleteUserContext")
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
        handleAddNewUserBookAfterNewComment,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
