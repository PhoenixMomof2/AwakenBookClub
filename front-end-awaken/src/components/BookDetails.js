import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import { UserContext } from "../context/UserContext";
import NewCommentForm from "./NewCommentForm";

const BookDetails = () => {
  const { books }  = useContext(BookContext)
  const { loggedIn }  = useContext(UserContext)
  const { id } = useParams()
  const getBook = books.find(book => book.id === parseInt(id))
 
  console.log(getBook, "book details")
   return (
    <section id="card-details">
      <div className="container pt-1 pb-1 pe-3 ps-3 bg-dark border-dark">
        <div className="row">
          <div className="col">
          <img src={getBook.book_img} className="card-img-top img-thumbnail rounded mx-auto d-block " alt={getBook.title}/>
          </div>
          <div className="col">
            <div className="card-body" key={getBook.id}>
              <h5 className="card-title text-danger fw-bolder">{getBook.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Author: {getBook.author}</h6>
              <p className="card-text text-warning fw-bold">Stars: {getBook.stars}</p>
              <p className="card-text text-success fw-bold">Category: {getBook.category}</p>
              <p className="card-text text-light fw-bold">Preview: {getBook.content}</p>
            </div>
          </div>
         </div>
      </div>
     {loggedIn === true ?  (
                  <div>
                    <div className="container-fluid bg-warning p-2 btn-outline-primary fw-bold text-center">
                      <Link className="btn border-dark px-4 m-1 border-2 bg-success text-light fw-bolder" to={`/users/${user.id}/books`}>Go To My BookList</Link>
                    </div>
                    <NewCommentForm key={getBook.id} getBook={getBook}/>
                  </div>
                 ) : (
                  <div className="container-fluid bg-warning p-2 btn-outline-primary fw-bold text-center">
                    <Link className="btn border-dark px-4 m-1 border-2 bg-success text-light fw-bolder" to="/books">Back To BookList</Link>
                  </div>
                 )}
    </section>
  )
}

export default BookDetails;