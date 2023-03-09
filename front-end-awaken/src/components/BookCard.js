import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { id, title, book_img, author, stars, category, short_content } = book;

  return (
    <div key={id} className="col mx-2 my-2 text-justify justify-content-center round">
      <img
        src={book_img}
        className="card-img-top img-fluid imy-thumbnail rounded mx-auto d-block "
        alt={title}
      />
      <div className="card-body" key={id}>
        <h4 className="card-title text-danger fw-bolder">{title}</h4>
        <h6 className="card-subtitle text-muted">Author: {author}</h6>
        <p className="card-text text-warning fw-bold">Stars: {stars}</p>
        <p className="card-text text-success fw-bold">Category: {category}</p>
        <p className="card-text text-light">Preview: {short_content}</p>
      </div>
      <div className="btn-group border fw-bold border-warning">
        <Link to={`/books/${id}`} className="btn btn-success py-2">
          Expand
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
