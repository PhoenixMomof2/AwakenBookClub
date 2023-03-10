import React, { useContext } from "react";
import BookCard from "../components/BookCard";
import { BookContext } from "../context/BookContext";

const BookList = () => {
  const { books }  = useContext(BookContext)
  const bookCards = books.map(book => <BookCard key={book.id} book={book}/>)
  
  return (
      <section id="book-list">
        <h2 className="bg-dark text-light text-center">Book List</h2>
        <div className="container-lg bg-dark py-2">
          <div className="justify-content-center row">
            { bookCards }
          </div>
        </div>
      </section>
  )
}

export default BookList;
