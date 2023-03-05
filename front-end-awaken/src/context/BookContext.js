// src/context/BookContext.js
import React, { createContext, useState, useEffect } from "react"

// // Create context
const BookContext = createContext()

const BookProvider = ({ children }) => {
  // value that will be given to the context
  const [books, setBooks] = useState([])

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

  return (
    <BookContext.Provider value={{ books, handleAddNewBook }}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BookProvider };
