import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { id, title, book_img, author, stars, category, short_content } = book;

  return (
    <div className="card border-warning border-3 bg-dark my-2 px-3">
      <div className="row no-gutters py-3">
        <div key={id} className="col-md-4">
        <img
          src={book_img}
          className="card-img rounded"
          alt={title}
        /> 
        </div>
        <div className="col-md-8">                         
          <h5 className="card-title text-danger fw-bolder">{title}</h5>
          <h6 className="card-subtitle text-muted">Author: {author}</h6>
          <p className="card-text text-warning pt-3 fw-bold">Stars: {stars}</p>
          <p className="card-text text-success fw-bold">Category: {category}</p>
          <p className="card-text text-light">{short_content}</p> 
            <Link to={`/books/${id}`} className="btn btn-sm btn-danger fw-bold justify-content-center py-2">
              Expand
            </Link>        
        </div>        
      </div>
    </div>
  );
};

export default BookCard;
