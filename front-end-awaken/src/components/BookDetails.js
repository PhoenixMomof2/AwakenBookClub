import React from "react";
import { BookContext } from "../context/BookContext";
import { useParams } from "react-router-dom";

const BookDetails = ({book}) => {
  // const { id } = useParams();
  // const {title, book_img, author, stars, category, content} = book;
 
  // const () = ().find(book => book.id === parseInt(id))
  // debugger;

  return (
    <section id="book-details">
      <div className="container-md">
        <div className="text-center">
          <h2>Book Details</h2>
          <p className="lead text-light">Lorem ipsum dolor sit amet, consectet</p>
        </div>

        <div>
          {/* <img src={book.id} className="img-fluid" alt="" /> */}
        </div>
      </div>
    </section>
   
  )
}

export default BookDetails;