import React from "react";
import { useParams, Link } from "react-router-dom";

const BookDetails = ({books}) => {
  const { id } = useParams();
  // const {title, book_img, author, stars, category, content} = book;
  // const () = ().find(book => book.id === parseInt(id))
  // debugger;
// console.log("BookDetails")
  return (
  <div>Hello World</div>
    // <section>
    //   <div className="col-sm-4">
    //     <div className="card-header">
    //     BookGroup
    //     </div>
    //     <img src={book_img} className="card-img-top rounded mx-auto d-block " alt={title}/>
    //     <div className="card-body" key={id}>
    //       <h5 className="card-title text-danger fw-bolder">{title}</h5>
    //       <h6 className="card-subtitle mb-2 text-muted">Author: {author}</h6>
    //       <p className="card-text text-warning fw-bold">Stars: {stars}</p>
    //       <p className="card-text text-success fw-bold">Category: {category}</p>
    //       <p className="card-text text-light fw-bold">Preview: {content}</p>
    //     </div>
    //     <div className="btn-group border border-warning">
    //     {/* <Link to="books" className="btn btn-dark">Book List</Link>
    //     <Link to="book_group" className="btn btn-success">Join Reading Group</Link> */}
    //     </div>
    //   </div>
    // </section>
  )
}

export default BookDetails;