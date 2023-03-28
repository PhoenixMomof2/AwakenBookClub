import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const UserBookList = () => {
  const { user, handleDeleteUserComment } = useContext(UserContext);
   
  const handleDeleteClick = (comment) => {
    fetch(`/users/${user.id}/comments/${comment.id}`, {
      method: "DELETE",
    }).then(() => {
      handleDeleteUserComment(comment);
    })
  }

  return (
    <React.Fragment>
    <div className="container-xl bg-danger">
      {user.books.map((book) => (
        <div
          key={book.id}
          className="card border-warning border-3 bg-dark my-2 px-3"
        >
          <div className="row no-gutters py-3">
            <div className="col-md-4">
              <img
                src={book.book_img}
                className="card-img rounded"
                alt={book.title}
              />
            </div>
            <div className="col-md-8">
              <h4 className="card-title text-danger fw-bolder">{book.title}</h4>
              <h6 className="card-subtitle text-muted">
                Author: {book.author}
              </h6>
              <p className="card-text text-warning pt-3 fw-bold">
                Stars: {book.stars}
              </p>
              <p className="card-text text-success fw-bold">
                Category: {book.category}
              </p>
              <p className="card-text text-light">Preview: {book.content}</p>
              <div className="text-light text-center">
                {book.comments.map((comment) => (
                  <div key={comment.id}>
                    <div className="list-group p-2 bg-dark my-1">
                      <div className="list-group-item">
                        <h6 className="text-success fst-italic">
                          <i className="bi bi-chat-quote-fill"></i>Posted:{" "}
                          {comment.created_at}
                        </h6>                       
                        <p className="mb-1 text-dark px-2">
                          {comment.comment}
                        </p>                
                        <small className="py-1 text-dark fst-italic">
                          <i className="bi bi-calendar-plus text-secondary fw-bold">
                            {" "}
                            Last updated: {comment.updated_at}
                          </i>
                        </small>
                      </div>
                    </div>
                    <div className="btn-group border mx-2 fw-bold border-warning">
                      <Link
                              className="btn btn-sm btn-dark text-center"
                              aria-current="page" 
                              state={{ comment }}
                              to={`/my_books/${book.id}/edit`}
                            >
                              Edit
                            </Link>
                      <Link
                        className="btn btn-sm btn-danger text-center"
                        to="#"
                        onClick={() => {
                          handleDeleteClick(comment);
                        }}
                      >
                        Delete
                      </Link>
                      <Link
                        className="btn btn-sm btn-success text-center"
                        aria-current="page"
                        to="/comments/new"                
                      >
                        Add A New Comment
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </React.Fragment>
  );
};

export default UserBookList;
