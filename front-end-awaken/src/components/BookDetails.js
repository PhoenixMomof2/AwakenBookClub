import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { BookContext } from "../context/BookContext";

const BookDetails = () => {
  const { id } = useParams();
  const books  = useContext(BookContext)
  const getBook = books.find(book => book.id === parseInt(id))
  const {title, book_img, author, stars, category, content} = getBook;
  console.log(getBook)
  // debugger;
// console.log("BookDetails")
  return (
  // <div>Hello World</div>
    <section id="card-details">
      <div className="container-flex pt-3 pb-3 pe-3 ps-3 bg-warning border-dark">
        <div>
          <img src={book_img} className="card-img-top rounded mx-auto d-block " alt={title}/>
          <div className="card-body" key={id}>
            <h5 className="card-title text-danger fw-bolder">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Author: {author}</h6>
            <p className="card-text text-warning fw-bold">Stars: {stars}</p>
            <p className="card-text text-success fw-bold">Category: {category}</p>
            <p className="card-text text-light fw-bold">Preview: {content}</p>
          </div>
          <div className="btn-group border border-warning">
          <Link to="/books" className="btn btn-dark">Book List</Link>
          <Link to="/book_groups" className="btn btn-success">Reading Groups</Link>
          </div>

          <div className="bg-circle-1 bg-circle"></div>
          <div className="bg-circle-2 bg-circle"></div>
          <div className="bg-circle-3 bg-circle"></div> 
          <div className="bg-circle-4 bg-circle"></div>
        </div>
      </div>
    </section>
  )
}

export default BookDetails;