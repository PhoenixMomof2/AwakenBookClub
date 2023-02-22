import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { BookContext } from "../context/BookContext";

const BookDetails = () => {
  // const {title, book_img, author, stars, category, content} = getBook;
  const books  = useContext(BookContext)
  const { id } = useParams();
  const getBook = books.find(book => book.id === parseInt(id))
  
  return (
    <section id="card-details">
      <div className="container-flex pt-3 pb-3 pe-3 ps-3 bg-dark border-dark">
        <div>
          <img src={getBook.book_img} className="card-img-top rounded mx-auto d-block " alt={getBook.title}/>
          <div className="card-body" key={id}>
            <h5 className="card-title text-danger fw-bolder">{getBook.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Author: {getBook.author}</h6>
            <p className="card-text text-warning fw-bold">Stars: {getBook.stars}</p>
            <p className="card-text text-success fw-bold">Category: {getBook.category}</p>
            <p className="card-text text-light fw-bold">Preview: {getBook.content}</p>
          </div>
          <div className="btn-group border border-warning">
          <Link to="/books" className="btn btn-dark">Back To Book List</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookDetails;