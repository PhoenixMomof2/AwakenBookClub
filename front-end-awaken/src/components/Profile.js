import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ProfilePic from "../images/ProfilePic.jpg";

const Profile = () => {
  const {user} = useContext(UserContext)
  console.log(user, "User object for the profile")
 
  return (
    <div className="container-flex">
      <div className="container-flex bg-warning">
        <div className="row">
          <div className="col">
            <section id="profile-top">
              <div className="card-group">
                <div className="card">          
                  <div className="card-body bg-danger">
                  <i className="px-5 bi bi-book"></i>
                  <h1 className="text-danger py-2 text-center bg-dark fw-bolder pt-2">   
                    {user.username}
                  </h1>
                  <i className="px-5 bi bi-book"></i>
                    <h4 className="text-center text-light bg-dark">Age | {user.age}</h4>
                    <p className="card-text">{user.bio}</p>
                  </div>          
                </div>
              </div>
            </section>
          </div>
          <div className="col">
            <section id="profile-body">
              <img src={ProfilePic} className="card-img-top img-fluid" alt="profile-placeholder"/>
            </section>
          </div>
        </div>
      </div>
      <section id="user-books">
        <div className="row">
        {user.books.map(book => (<div key={book.id} className="col mx-2 my-2 text-justify justify-content-center round">
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
          </div>))}
        </div>
      </section>
      <section id="user-comments">
        <div className="row">
          {user.comments.map(comment => (
            <div className="col">
                <div className="list-group  bg-dark">
                  <div className="list-group-item" key={comment.id}>
                    <h3 className="text-danger text-center"> <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>User Name</h3><i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                    <div className="text-center">
                      
                      
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                    </div>
                    <p className="mb-1 text-dark fw-bold text-center p-3">{comment.comment}</p>
                    <small>
                    Comment by:{user.username}  || Age:{user.age}
                    </small>
                  </div>
                </div>
              </div>))}
        </div>
      </section>
    </div>
  )
}

export default Profile;