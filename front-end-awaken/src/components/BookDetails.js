import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import { UserContext } from "../context/UserContext";

const BookDetails = () => {
  const { books } = useContext(BookContext);
  const { loggedIn, user } = useContext(UserContext);
  const { id } = useParams();
  const getBook = books.find((book) => book.id === parseInt(id));
  console.log("Current book:", getBook)

  return (
    <React.Fragment>
      <div key={id} className="row no-gutters justify-content-center">
        <div className="col-md-4 card-body bg-dark">
          <img
            src={getBook.book_img}
            className="card-img col-md-4"
            alt={getBook.title}
          />
        </div>
        <div className="card-body bg-dark col-md-8">
          <h5 className="card-title text-danger fw-bolder">{getBook.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Author: {getBook.author}
          </h6>
          <p className="card-text text-warning fw-bold">
            Stars: {getBook.stars}
          </p>
          <p className="card-text text-success fw-bold">
            Category: {getBook.category}
          </p>
          <p className="card-text text-light">{getBook.content}</p>
          {getBook.user_comments.map((comment) => (
            <div key={comment.id} className="text-center">
              <div className="list-group p-2 bg-dark my-1">
                <div className="list-group-item">
                  <p className="mb-1 text-dark fw-bold px-2">
                    {comment.comment}
                  </p>
                  <div>
                    <small className="ps-3 py-1 fst-italic">
                      <i className="ps-1 bi bi-chat-quote-fill text-success"></i>
                      {/* Posted by: {comment.username} */}
                      Posted by: {user.username === comment.name
                                    ? user.username
                                    : comment.name}
                    </small>
                  </div>
                  <div>
                    <small className="ps-3 py-1 fst-italic">
                      <i className="ps-1 bi bi-calendar-plus text-secondary fw-bold">
                        {comment.updated_at}
                      </i>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid bg-warning p-2 btn-outline-primary fw-bold text-center">
        {loggedIn ? (
          <>
            <Link
              className="btn border-dark px-4 m-1 border-2 bg-success text-light fw-bolder"
              to="/books"
            >
              Back To BookList
            </Link>
            <Link
              to="/comments/new"
              className="btn border-dark px-4 m-1 border-2 bg-success text-light fw-bolder"
            >
              Add A Comment
            </Link>
          </>
        ) : (
          <Link
            className="btn border-dark px-4 m-1 border-2 bg-success text-light fw-bolder"
            to="/books"
          >
            Back To BookList
          </Link>
        )}
      </div>
    </React.Fragment>
  );
};

export default BookDetails;
