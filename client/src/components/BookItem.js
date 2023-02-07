import React from "react";
// import { useParams } from "react-router-dom";
import { BookProvider } from "../context/BookContext";

const BookItem = ({oneBook: { id, title, book_img, author, stars, category, content }}) => {
  // const { id } = useParams()
  // const aBook = myBooks.find(book => book.id === parseInt(id))
  // debugger;
  console.log("I'm in the BookItem Component") 
  
  return (
    <BookProvider>
      <div className="card">
        <img src={book_img} className="card-img-top" alt={title}/>
        <div className="card-body" key={id}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <a href="/books/:id" className="btn btn-primary">See More</a>
        </div>
      </div>
   </BookProvider> 
  )
}

export default BookItem;