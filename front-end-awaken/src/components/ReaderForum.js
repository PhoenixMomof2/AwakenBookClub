import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../context/BookContext";

const ReaderForum = () => {
  const { books } = useContext(BookContext)

  return (
    <div className="container-flex">
      <h1 className="mx-3 text-light bg-danger pt-2 text-center">
        <i className="bi bi-book fw-bold text-light p-3 m-3"></i>
          Reader Forum
        <i className="bi bi-book fw-bold text-light p-3 m-3"></i>
      </h1>
      {books.map(book => (<div key={book.id} className="card">
        <div className="row no-gutters py-2">
          <div className="col-md-4">
            <img src={book.book_img} alt={book.title} className="card-img" />
          </div>
          <div className="col-md-8 bg-dark">
            <div className="card-body">
              <h5 className="card-title text-light">{book.title}</h5>
              <h6 className="card-subtitle text-muted">Author: {book.author}</h6>
              <p className="card-text text-warning pt-3 fw-bold">Stars: {book.stars}</p>
              <p className="card-text text-success fw-bold">Category: {book.category}</p>
              <p className="card-text text-light">{book.content}</p>
              <Link to="/comments" className="btn btn-sm btn-danger fw-bold justify-content-center py-2">
                Comments
              </Link>  
            </div>
          </div>
        </div>
      </div> ))}
    </div>
  );
};

export default ReaderForum;