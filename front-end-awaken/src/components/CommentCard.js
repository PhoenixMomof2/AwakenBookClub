import React from "react";

const CommentCard = ({ comment }) => {
 console.log(comment)
  return ( 
    <div className="col-6 text-center" key={comment.id}>
      <div className="list-group py-3 bg-danger my-2">
        <div className="list-group-item" key={comment.id}>
          <h3 className="text-center bg-dark text-light">{comment.book.title}</h3>
          <h4 className="text-danger fw-bolder text-center"><i className="bi bi-book-half"></i> {comment.user.username}</h4>
          <h6 className="text-success fst-italic"><i className="bi bi-chat-quote-fill"></i> {comment.format_created_at_date}</h6>
          <p className="mb-1 text-dark px-2">{comment.comment}</p>                    
          <small className="py-1 text-dark fst-italic">
          <i className="bi bi-calendar-plus text-secondary fw-bold">  Last updated: {comment.format_updated_at_date}</i>
          </small>                         
        </div>
      </div>
    </div>   
  );
};

export default CommentCard;
