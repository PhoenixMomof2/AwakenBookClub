import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { BookContext } from "../context/BookContext";

const BookDetails = () => {
  const { books }  = useContext(BookContext)
  const { id } = useParams()
  const getBook = books.find(book => book.id === parseInt(id))
 
   return (
   <React.Fragment>
      <div key={id} className="row no-gutters justify-content-center">      
        <div className="col-md-4 card-body bg-dark">
          <img src={getBook.book_img} className="card-img col-md-4" alt={getBook.title}/>
          </div>
            <div className="card-body bg-dark col-md-8">
              <h5 className="card-title text-danger fw-bolder">{getBook.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Author: {getBook.author}</h6>
              <p className="card-text text-warning fw-bold">Stars: {getBook.stars}</p>
              <p className="card-text text-success fw-bold">Category: {getBook.category}</p>
              <p className="card-text text-light">{getBook.content}</p>
            </div>
         </div>   
      <div className="container-fluid bg-warning p-2 btn-outline-primary fw-bold text-center">
        <Link className="btn border-dark px-4 m-1 border-2 bg-success text-light fw-bolder" 
        to="/books"
        >
        Back To BookList
        </Link>
      </div>
  </React.Fragment>
  )
}

export default BookDetails; 