import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HoldHands from "../images/HoldHands.jpg";
import { UserContext } from "../context/UserContext";
import { BookContext } from "../context/BookContext";

const UserBookList = () => {
  const { user, handleDeleteUserComment } = useContext(UserContext);
  const { handleDeleteBookComment } = useContext(BookContext);

  const handleDeleteClick = (comment) => {
    fetch(`/users/${user.id}/comments/${comment.id}`, {
      method: "DELETE",
    }).then(() => {      
      handleDeleteUserComment(comment);
      handleDeleteBookComment(comment);
    });
  };
console.log(user, "user book list")
  return (
    <div className="container-flex bg-dark">
      <div className="container bg-dark border-bottom border-danger border-3">
        <div className="row bg-dark">
          <div className="container-flex bg-dark col">
            <section id="profile-top-left" className="container-flex">
              <div className="card-group pt-4">
                <div className="card bg-dark">
                  <div className="text-justify mx-2 card-body bg-dark">
                    <h2 className="text-danger text-center bg-dark fw-bolder">
                      <i className="px-2 bi bi-book text-center"></i>
                      {user.username}
                    </h2>
                    <p className="card-text-justify text-light">{user.bio}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="container-fluid bg-dark col">
            <section id="profile-top-right" className="container-fluid">
              <div className="container-flex py-5 my-5">
                <img
                  src={HoldHands}
                  className="text-center card-img-top img-fluid bg-dark ms-1"
                  alt="profile-placeholder"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
      <section id="profile-body" className="container-flex">
        <div className="container bg-dark py-3">
          <div className="container-fluid row">
            <h2 className="mx-3 text-warning text-center">
              <i className="bi bi-book p-3 m-3"></i>
                My Engagement
              <i className="bi bi-book p-3 m-3"></i>
            </h2>
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
                    <div className="text-light text-center">
                      {book.user_comments.map((comment) => (
                        <div key={comment.id}>
                          <div className="list-group p-2 bg-dark my-1">
                            <div className="list-group-item">
                              <h6 className="mb-1 text-dark fw-bold px-2">
                                {comment.comment}
                              </h6>
                              <div>
                                <small className="ps-3 py-1 fst-italic">
                                  <i className="ps-1 bi bi-chat-quote-fill text-success"></i>
                                  Posted by:{" "}
                                  {user.username === comment.name
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
                            {user.username === comment.name ? (
                              <div className="btn-group border border-2 border-warning">
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
                                </div>
                              ) : null}  
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container-fluid py-2">
        <div className="container row btn-group">
          <div className="container-fluid col text-center p-2">
            <Link
              to="/books"
              className="p-3 btn bg-black text-warning fw-bold border-light border-1"
            >
              All Books
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserBookList;
