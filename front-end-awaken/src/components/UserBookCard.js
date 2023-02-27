import React from "react";
import { Link } from "react-router-dom";

const UserBookCard = ({ book }) => {
  const { id, title, book_img, author, stars, category, short_content } = book;

  return (
    <div className="col mx-2 my-2 text-justify justify-content-center round">
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
        <p className="card-text text-light fw-bold">Preview: {short_content}</p>
      </div>
      <div className="btn-group border fw-bold border-warning">
        <Link to="/user/comments" className="btn btn-sm btn-dark py-2">
          My Comments
        </Link>
        <Link to="/comments/new" className="btn btn-sm btn-danger py-2">
          Leave A Comment
        </Link>
      </div>
    </div>
  );
};

export default UserBookCard;
