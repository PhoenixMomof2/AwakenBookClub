import React, { useContext } from "react";
import BookItem from "../components/BookItem";
import { BookContext } from "../context/BookContext";

const BookList = () => {
  const books  = useContext(BookContext)
  const bookCards = books.map(book => <BookItem key={book.id} book={book}/>)
  
  console.log("I'm in the BookList Component")

  return (
    <div className="container-lg my-5 bg-dark">
      <div className="row justify-content-center">
        { bookCards }
      </div>
    </div>
    
  );
};

export default BookList;
