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

  const handleUpdateBookComments = (updatedBook) => {
    const updatedBooks = books.map(book => book.id === updatedBook.id ? updatedBook : book)
    setBooks(updatedBooks);
  }

  return (
    <BookContext.Provider value={{ books, handleAddNewBook, handleUpdateBookComments }}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BookProvider };