import React from "react";

const CommentCard = ({ comment }) => {

  return ( 
    <div  key={comment.id} className="text-center">
      <div className="list-group p-2 bg-dark my-1">
        <div className="list-group-item">       
        <h6 className="bg-warning p-2 mx-1">{comment.book.title}</h6>
          <h6 className="text-success fst-italic"><i className="bi bi-chat-quote-fill"></i>Posted: {comment.format_created_at_date}</h6>
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
