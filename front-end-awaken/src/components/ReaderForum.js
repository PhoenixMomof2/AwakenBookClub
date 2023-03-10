import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const ReaderForum = () => {
  const { books } = useContext(BookContext)
  console.log(books)

  const bookConversationCards = books.map(book => (<div key={book.id} className="container-lg py-3 col">
    <div className="row align-items-center justify-content-center">
      <div className="col-8 col-lg-4 col-xl-3"> 
        <div className="card-body col-6" key={book.id}>
          <img
            src={book.book_img}
            className="card-img-top img-fluid imy-thumbnail rounded mx-auto d-block "
            alt={book.title}
          />          
            <h3 className="card-title text-dark fw-bolder">{book.title}</h3>
            <h6 className="card-subtitle text-muted pt-2">Author: {book.author}</h6>
            <p className="card-text text-danger pt-3 fw-bold">Stars: {book.stars}</p>
            <p className="card-text text-success fw-bold">Category: {book.category}</p>
            <p className="card-text text-dark">Preview: {book.short_content}</p>
        </div>
          <div>{book.comments.map(comment => (
              <div key={comment.id}className="row py-3 bg-dark">                
                  <h5><i className="bi bi-chat-quote-fill"></i> Posted: {comment.format_created_at_date}</h5>
                  <p className="mb-1 text-dark px-2">{comment.comment}</p>                    
                  <h6 className="py-1">
                  <i className="bi bi-calendar-plus text-dark">  Last updated: {comment.format_updated_at_date}</i>
                  </h6>  
          </div>))}
          </div>
          </div>
        </div>
      </div>))

  return (
    <React.Fragment>
      <div className="container bg-dark py-5">
          <h1 className="mx-3 text-light bg-dark text-center">
            <i className="bi bi-book fw-bold text-light p-3 m-3"></i>
              Reader Forum
            <i className="bi bi-book fw-bold text-light p-3 m-3"></i>
          </h1>
          </div>
      <section id="forum">    
          <div className="row text-center">
          { bookConversationCards }
          </div>    
      </section> 
    </React.Fragment>
  );
};

export default ReaderForum;