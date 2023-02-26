// src/context/BookContext.js
import React, { createContext, useState, useEffect } from "react"

// // Create context
const BookContext = createContext()

const BookProvider = ({ children }) => {
  // value that will be given to the context
  const [books, setBooks] = useState([])

  // console.log("I'm in BookProvider")

  // fetch the books
  useEffect(() => {
    const fetchBooks = () => {
      fetch("/books")
        .then((res) => res.json())
        .then((data) => setBooks(data))
        .catch(() => console.log("An error occurred."))
    };
    fetchBooks()
  }, [])

  const handleAddNewBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (id) => {
    fetch(`books/${id}`, {
    method: "DELETE",
    }).then(() => {
      handleDeleteBook(id);
      // console.log("Deleted")
    })
  }

  return (
    <BookContext.Provider value={{books, handleAddNewBook, handleDeleteBook}}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BookProvider };
