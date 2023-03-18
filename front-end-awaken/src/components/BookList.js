import React, { useContext } from "react";
import BookCard from "../components/BookCard";
import { BookContext } from "../context/BookContext";

const BookList = () => {
  const { books }  = useContext(BookContext)
  const bookCards = books.map(book => <BookCard key={book.id} book={book}/>)
  
  return (
    <div className="container-xl bg-danger">
      { bookCards }        
    </div>
  )
}

export default BookList;
