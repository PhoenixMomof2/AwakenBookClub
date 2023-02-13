// src/context/BookGroupContext.js
import React, { createContext, useState, useEffect } from "react";

// // Create context
const BookGroupsContext = createContext();

const BookGroupsProvider = ({ children }) => {
  // value that will be given to the context
  const [book_groups, setBook_Groups] = useState([]);
  const [comments, setComments] = useState([]);
  // console.log("I'm in BookProvider")

  // fetch the book_groups
  useEffect(() => {
    const fetchBookGroups = () => {
      fetch("/book_groups")
        .then((res) => res.json())
        .then((data) => setBook_Groups(data))
        .catch((error) => console.log("An error occurred."));
    };
    fetchBookGroups();
  }, []);

  return (
    <BookGroupsContext.Provider value={ book_groups }>
      {children}
    </BookGroupsContext.Provider>
  );
};

export { BookGroupsContext, BookGroupsProvider };