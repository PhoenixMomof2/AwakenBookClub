// src/context/BookContext.js
import React, { createContext, useState, useEffect } from 'react';

// // Create context
const BookContext = createContext();

const BookProvider = ({ children }) => {
  // value that will be given to the context
  const [books, setBooks] = useState([])

  console.log("I'm in BookProvider")

  // fetch the books
  useEffect(() => {
      const fetchBooks = () => {
        fetch('/books')
        .then(res => res.json())
        .then(data => 
          // console.log(data, "In the book fetch")
          setBooks(data, "Inside setBooks" ))
        .catch((error) => console.log("An error occurred."));
      };
  fetchBooks();
  }, []);
  
  return (
    <BookContext.Provider value={books}>
      {children}
    </BookContext.Provider>
  );
}

export { BookContext, BookProvider };