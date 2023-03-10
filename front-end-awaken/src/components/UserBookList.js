import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const UserBookList = () => {
  const { user } = useContext(UserContext);
     
  return (
    <div className="container-xl">
      <div className="card bg-dark py-5">
        <div className="row no-gutters">
        {user.books.map((book) =>
        <div key={book.id} className="col-md-4 mx-2 my-2 text-justify justify-content-center round">
            <img
              src={book.book_img}
              className="card-img rounded"
              alt={book.title}
            />
            <div className="col-md-8">
              <h4 className="card-title text-danger fw-bolder">{book.title}</h4>
              <h6 className="card-subtitle text-muted">Author: {book.author}</h6>
              <p className="card-text text-warning pt-2 fw-bold">Stars: {book.stars}</p>
              <p className="card-text text-success fw-bold">Category: {book.category}</p>
              <p className="card-text text-light">Preview: {book.short_content}</p>
              <Link to={`/users/${user.id}/comments`} className="btn btn-sm btn-danger fw-bold justify-content-center py-2">
                My Comments
              </Link>  
            </div>        
          </div>)}
        </div>
      </div>   
    </div>
  )
}

export default UserBookList