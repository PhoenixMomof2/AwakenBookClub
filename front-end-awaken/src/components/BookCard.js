import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { id, title, book_img, author, stars, category, short_content } = book;

  return (
    <div className="col-xl-2 mx-2 my-2">
      <img
        src={book_img}
        className="card-img-top rounded mx-auto d-block "
        alt={title}
      />
      <div className="card-body" key={id}>
        <h5 className="card-title text-danger fw-bolder">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Author: {author}</h6>
        <p className="card-text text-warning fw-bold">Stars: {stars}</p>
        <p className="card-text text-success fw-bold">Category: {category}</p>
        <p className="card-text text-light fw-bold">Preview: {short_content}</p>
      </div>
      <div className="btn-group border border-warning">
        <Link to={`/books/${id}`} className="btn btn-danger pt-4">
          Expand
        </Link>
        <Link to="/book_groups/book_id/comments" className="btn btn-dark pt-3">
          Leave a Comment
        </Link>
        <Link to={"/book_groups"} className="btn btn-success">
          Join Reading Group
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
