import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CommentContext } from "../context/CommentContext";

const UserCommentCard = ({comment}) => {
  
  console.log(comment, "UserCommentCard");
  const { handleDeleteComment } = useContext(CommentContext)

  return (
      <div className="col mx-2 my-2 text-justify justify-content-center round">
        <div className="list-group  bg-dark">
          <div className="list-group-item" key={comment.id}>
            <h1 className="text-success text-center">{comment.book.title}</h1>
            <h3 className="text-danger text-center">{comment.user.username}</h3>
            <div className="text-center">
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
            </div>
            <p className="mb-1 text-dark fw-bold text-center p-3">{comment}</p>
            <small>
            Comment by:  || Age: 
            </small>
            <div className="btn-group border fw-bold border-danger p-1 bg-dark ms-4">
              <Link className="btn btn-center bg-success text-light fw-bold p-2" to={`/comments/${comment.id}/edit`}>
                Edit
              </Link>
              <Link className="btn btn-center bg-danger text-light fw-bold p-2" to="/user/comments" onClick={() => {handleDeleteComment(comment.id)}}>
                Delete
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default UserCommentCard;