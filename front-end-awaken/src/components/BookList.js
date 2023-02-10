import React, { useContext } from "react";
import BookCard from "../components/BookCard";
import { BookContext } from "../context/BookContext";
import NewBookForm from "../components/NewBookForm";

const BookList = () => {
  const books  = useContext(BookContext)
  const bookCards = books.map(book => <BookCard key={book.id} book={book}/>)
  
  console.log("I'm in the BookList Component")

  return (
    <div className="container-lg my-5 bg-dark p-3">
      <NewBookForm />
      <div className="row justify-content-center">
        { bookCards }
      </div>
    </div>
    
  );
};

export default BookList;
