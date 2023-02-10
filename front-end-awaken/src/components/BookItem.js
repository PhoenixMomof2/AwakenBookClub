import React from "react";
import { redirect } from "react-router-dom";
  

const BookItem = ({book}) => {
  const {id, title, book_img, author, stars, category, content} = book;
  
  return (
    <div className="col-sm-4">
      <div className="card-header">
      BookGroup
      </div>
      <img src={book_img} className="card-img-top rounded mx-auto d-block " alt={title}/>
      <div className="card-body" key={id}>
        <h5 className="card-title text-danger fw-bolder">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Author: {author}</h6>
        <p className="card-text text-warning fw-bold">Stars: {stars}</p>
        <p className="card-text text-success fw-bold">Category: {category}</p>
        <p className="card-text text-light fw-bold">Preview: {content}</p>
      </div>
      <div className="btn-group border border-warning">
      <a href="/books/:id" className="btn btn-danger" onClick={redirect('/books/:id')}>Content</a>
      <a href="books/:id" className="btn btn-dark">Add Book</a>
      <a href="books/:id" className="btn btn-success">Join Reading Group</a>
      </div>
    </div>
  )
}

export default BookItem;