import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
const BookCard = ({ book }) => {
  const { id, title, book_img, author, stars, category, short_content } = book;
  const user = useContext(UserContext)

  return (
    <div className="col-9-lg col-6-md col-2 mx-2 my-2">
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
        <Link to={`users/${user.id}/book_groups/${id}`}className="btn btn-success">
          Join Reading Group
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
