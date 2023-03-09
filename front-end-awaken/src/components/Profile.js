import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import MomSanai from "../images/MomSanai.jpeg";

const Profile = () => {
  const { user } = useContext(UserContext)
 
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
                <img src={MomSanai} className="text-center card-img-top img-fluid bg-dark ms-1" alt="profile-placeholder"/>
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
              {user.books.map(book => (<div key={book.id} className="col border border-light mx-2 my-2 py-3 text-justify justify-content-center round">
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
                  <p className="card-text text-light fw-bold">Preview: {book.short_content}</p>
                </div>
                <div>{book.comments.map(comment => (
                  <div className="col" key={comment.id}>
                    <div className="list-group py-3 bg-dark">
                      <div className="list-group-item" key={comment.id}>
                        <h6 className="text-success fst-italic"><i className="bi bi-chat-quote-fill"></i> {comment.format_created_at_date}</h6>
                        <p className="mb-1 text-dark px-2">{comment.comment}</p>                    
                        <small className="py-1 text-dark fst-italic">
                        <i className="bi bi-calendar-plus text-secondary fw-bold">  Last updated: {comment.format_updated_at_date}</i>
                        </small>                         
                      </div>
                    </div>
              </div>))}
              </div>
              <Link
              className="p-3 btn bg-black text-warning fw-bold text-center border-light border-1"
              aria-current="page"
              to={`/users/${user.id}/comments/new`}
            >
              Add A New Comment
            </Link>
              </div>))}
            </div>
        </div>
      </section>         
      <section className="container-fluid py-2">
        <div className="container row text-center btn-group">
          <div className="container-fluid col text-center p-2">
            <Link to="/books" className="p-3 btn bg-black text-warning fw-bold text-center border-light border-1">All Awaken List</Link>
          </div>
          <div className="container-fluid col text-center p-2">
            <Link to="/comments" className="p-3 btn bg-black text-warning fw-bold text-center border-light border-1">Back To All Comments</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile;