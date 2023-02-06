import React from "react";
// import { BookContext, BookProvider } from "../context/BookContext";

const BookItem = ({book: {id, title, book_img, content}}) => {

 
  return (
    // <BookProvider>
    <div class="card" key={id}>
      <img src={book_img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{content}</p>
        <a href="/books/:id" class="btn btn-primary">See More</a>
      </div>
    </div>
    // </BookProvider> 
  )
}

export default BookItem;