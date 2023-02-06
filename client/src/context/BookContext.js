// src/context/BookContext.js
// import React, { useState, useEffect } from 'react';

// Create context
// const BookContext = React.createContext();

// const BookProvider = ({ children }) => {
//   const [books, setBooks] = useState([]);
//   const book = {
//     title: title,
//     book_img: book_img,
//     author: author, 
//     stars: stars, 
//     category: category,
//     content: content
//   }
  
//   useEffect(() => {
//     fetch('/books')
//       .then(res => res.json())
//       .then(books => setBooks(books))
//     }, []);

//   return (
//     <BookContext.Provider value={{books}}>
//       {children}
//     </BookContext.Provider>
//   );
// }

// export { BookContext, BookProvider };