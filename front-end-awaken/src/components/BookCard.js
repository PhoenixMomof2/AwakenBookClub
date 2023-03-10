import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { id, title, book_img, author, stars, category, short_content } = book;

  return (
    <div key={id} className="col mx-1 my-2 text-justify justify-content-center round">
      <div className="card pb-3 bg-dark border-1 border-light">
        <div className="card-body bg-dark">
          <img
            src={book_img}
            className="card-img-top img-fluid imy-thumbnail rounded mx-auto d-block "
            alt={title}
          />        
            <h5 className="card-title text-danger fw-bolder">{title}</h5>
            <h6 className="card-subtitle text-muted">Author: {author}</h6>
            <p className="card-text text-warning pt-1">Stars: {stars}</p>
            <p className="card-text text-success fw-bold">Category: {category}</p>
            <p className="card-text text-light">Preview: {short_content}</p>                
        </div>
        <div className="text-center bg-dark fw-bold">
            <Link to={`/books/${id}`} className="text-center border-light btn-sm btn-success">
              Expand
            </Link>
          </div>
      </div>
    </div>
  );
};

export default BookCard;
