import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserCommentList = () => {
  const { user } = useContext(UserContext);
  console.log(user, "UserCommentList");

  return (
    <div className="container list-group">
    <div className="col text-center bg-dark pt-2">    
        <div className="list-group-item bg-dark py-1 my-2">
          {user.books.map((book) => (<div key={book.id}>
          <h4 className="text-light py-1 bg-dark border border-2 fw-bolder text-center">
            <i className="bi bi-book-half"></i> {book.title}
          </h4>
          <h6 className="text-light bg-danger border border-2 border-dark py-2 fw-bolder text-center"><i className="bi bi-chat-heart-fill"></i> My Commentary</h6>
          {user.comments.map((comment) => (
          <div  key={comment.id} className="text-center">
          <div className="list-group p-2 bg-dark my-1">
            <div className="list-group-item">       
              <h6 className="text-success fst-italic"><i className="bi bi-chat-quote-fill"></i> {comment.format_created_at_date}</h6>
              <p className="mb-1 text-dark px-2">{comment.comment}</p>                    
              <small className="py-1 text-dark fst-italic">
              <i className="bi bi-calendar-plus text-secondary fw-bold">  Last updated: {comment.format_updated_at_date}</i>
              </small>                         
            </div>
          </div>
        </div>))}
        </div>))}
        </div>   
      </div>
    </div>
  )
}

export default UserCommentList;

// ADD BUTTONS TO CARDS AND CHECK ROUTES FROM UPDATE FORM AND NEW COMMENT FORM BOOK_ID VALUE