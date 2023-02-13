import React, { useContext } from "react";
import BookCard from "../components/BookCard";
import { BookContext } from "../context/BookContext";


const BookList = () => {
  const books  = useContext(BookContext)
  const bookCards = books.map(book => <BookCard key={book.id} book={book}/>)
  
  console.log("I'm in the BookList Component")

  return (
      <section id="book-list">
        <div className="container-flex bg-dark">
          <div className="row align-items-center justify-content-center">
            { bookCards }
          </div>
        </div>
      </section>
  );
};

export default BookList;
