import React, { useContext } from "react";
import BookItem from "../components/BookItem";
import { BookContext } from "../context/BookContext";

const BookList = () => {
  const books = useContext(BookContext)
  const myBooks = [{books}]
  
  console.log("I'm in the BookList Component")

  return (
    <div className="container">
          {myBooks.map((oneBook) => <BookItem key={oneBook.id} oneBook={oneBook}/>)}
      </div> 
  );
};

export default BookList;
