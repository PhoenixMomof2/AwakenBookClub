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
    setBooks([...books, newBook])    
    console.log("added new book", newBook)
  };

  const handleUpdateBookComments = (updatedBook) => {
    console.log(updatedBook, "updatedBook")
    const updatedBooks = books.map(book => book.id === updatedBook.id ? updatedBook : book)
    setBooks(updatedBooks);
  }

  const handleDeleteBookComment = (deletedComment) => {
    const updatedBook = books.find(book => book.id === deletedComment.book_id)
    const updatedBookComments = updatedBook.user_comments.filter((c) => c.id !== deletedComment.id)
    const updatedBook2 = {...updatedBook, user_comments: updatedBookComments}
    const updatedBooks = books.map((book) => book.id === updatedBook2.id ? updatedBook2 : book)
    setBooks(updatedBooks);
    console.log(updatedBook2, "handleDeleteBookContext")
  }

  return (
    <BookContext.Provider value={{ books, handleAddNewBook, handleUpdateBookComments, handleDeleteBookComment }}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BookProvider };