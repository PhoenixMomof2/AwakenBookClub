import React, { useContext, useParams } from "react";
import { Link } from "react-router-dom";
import { CommentContext } from "../context/CommentContext";

const UserCommentCard = ({ comment }) => {
  const { handleDeleteComment } = useContext(CommentContext)
  console.log(comment, "User Comment Card")

  return (
    <div className="row text-center">
      <div className="list-group py-3 bg-danger my-2">
        <div className="list-group-item" key={comment.id}>
          {/* <h3 className="text-center">{comment.book.title}</h3> */}
          <h4 className="text-danger fw-bolder text-center"><i className="bi bi-book-half"></i> {comment.user.username}</h4>
          <h6 className="text-success fst-italic"><i className="bi bi-chat-quote-fill"></i> {comment.format_created_at_date}</h6>
          <p className="mb-1 text-dark px-2">{comment}</p>                    
          <small className="py-1 text-dark fst-italic">
          <i className="bi bi-calendar-plus text-secondary fw-bold">  Last updated: {comment.format_updated_at_date}</i>
          </small>                         
        </div>
      </div>
      <div className="btn-group border fw-bold border-warning">
        <Link to={`/users/${user.id}/comments/${comment.id}/edit`} className="btn btn-sm btn-dark py-2">
          Edit
        </Link>
        <Link to={`/users/${user.id}/comments/${comment.id}`} className="btn btn-sm btn-danger py-2" onClick={() => {handleDeleteComment()}}>
          Delete
        </Link>
      </div>
    </div>   
  )
}

export default UserCommentCard;