import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const UserBookList = () => {
  const { user } = useContext(UserContext);
     
  return (
    <section id="user-book-list">
      <div className="container bg-dark py-5">
        <div className="row">
        {user.books.map((book) =>
        <div key={book.id} className="col mx-2 my-2 text-justify justify-content-center round">
            <img
              src={book.book_img}
              className="card-img-top img-fluid imy-thumbnail rounded mx-auto d-block "
              alt={book.title}
            />
            <div className="card-body" key={book.id}>
              <h4 className="card-title text-danger fw-bolder">{book.title}</h4>
              <h6 className="card-subtitle text-muted">Author: {book.author}</h6>
              <p className="card-text text-warning fw-bold">Stars: {book.stars}</p>
              <p className="card-text text-success fw-bold">Category: {book.category}</p>
              <p className="card-text text-light">Preview: {book.short_content}</p>
            </div>
            <div className="btn-group border fw-bold border-warning">
              <Link to={`/users/${user.id}/comments`} className="btn btn-sm btn-dark py-2">
                My Comments
              </Link>             
            </div>
        </div>)}
        </div>
      </div>
    </section>
  )
}

export default UserBookList