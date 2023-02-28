import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserCommentList = () => {
  const { user } = useContext(UserContext);
  console.log(user, "UserCommentList");
  // const userCommentCards = 
  //   <UserCommentCard key={comment.id} comment={comment} />))

  return (
    <div className="list-group py-3 bg-danger my-2">
      {user.books.map((book) => (<div key={book.id}>
       <h4 className="text-light fw-bolder text-center">
        <i className="bi bi-book-half"></i> {book.title}
        </h4>
           {user.comments.map((comment) => (
      <div className="row text-center" key={comment.id}>
      <div className="list-group py-3 bg-danger my-2">
        <div className="list-group-item" key={comment.id}>
          
          
          <h6 className="text-success fst-italic"><i className="bi bi-chat-quote-fill"></i> {comment.format_created_at_date}</h6>
          <p className="mb-1 text-dark px-2">{comment.comment}</p>                    
          <small className="py-1 text-dark fst-italic">
          <i className="bi bi-calendar-plus text-secondary fw-bold">  Last updated: {comment.format_updated_at_date}</i>
          </small>                         
        </div>
      </div>
    </div>   ))}
        </div>
    
    ))}
    </div>   
  )
}

export default UserCommentList;
