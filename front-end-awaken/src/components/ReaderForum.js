import React, { useContext } from "react";
// import { Link } from "react-router-dom"
import { BookContext } from "../context/BookContext";

const ReaderForum = () => {
  const { books } = useContext(BookContext)
  console.log(books)

  const bookConversationCards = (<div><h1 className="text-light">BookConversationCard</h1></div>)
  /* {books.map(book => (<div key={book.id} className="col border border-light mx-2 my-2 py-3 text-justify justify-content-center round">
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
            <h5><i className="bi bi-chat-quote-fill"></i> {comment.format_created_at_date}</h5>
            <p className="mb-1 text-dark px-2">{comment.comment}</p>                    
            <h6 className="py-1">
            <i className="bi bi-calendar-plus text-dark">  Last updated: {comment.format_updated_at_date}</i>
            </h6>                         
          </div>
        </div>
  </div>))}</div>
  </div>))}
</div>
</div>
</section>         
<section className="container-fluid py-2">
<div className="container btn-group justify-content-center">
<div className="container-fluid text-center p-2">
<Link to="/books" className="p-3 btn bg-black text-warning fw-bold text-center border-light border-1">Back To Book List</Link>
</div>
<div className="container-fluid text-center p-2">
<Link to="/comments" className="p-3 btn bg-black text-warning fw-bold text-center border-light border-1">Back To All Comments</Link>
</div> */

  return (
    <div className="container-flex">
      <section id="user-books" className="container-flex">
        <div className="bg-dark py-3">
          <div className="row">
          <h2 className="mx-3 text-warning text-center">
            <i className="bi bi-book p-3 m-3"></i>
             Reader Engagement
          <i className="bi bi-book p-3 m-3"></i>
          </h2>  
          </div>
        </div>
      </section>  
      <section>
        <div className="container-flex text-center">
        {bookConversationCards}
        </div>
      </section>
    </div>
  );
};

export default ReaderForum;
