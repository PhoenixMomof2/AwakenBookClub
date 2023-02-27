import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CommentContext } from "../context/CommentContext";

const CommentsDisplay = ({ comment }) => {
  const { id } = useParams();
  const { handleDeleteComment } = useContext(CommentContext);
 
  return (
    <div className="container-flex">
      <div className="row py-2">
        <div className="list-group  bg-dark">
          <div className="list-group-item" key={comment.id}>
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
            <p className="mb-1 text-dark fw-bold text-center p-3">{comment.comment}</p>
            <small>
            <i className="bi bi-book-half"></i> {comment.user.username} 
            </small>
            <div className="btn-group border fw-bold border-danger p-1 bg-dark ms-4">
              <Link className="btn btn-center bg-success text-light fw-bold p-2" to={`/comments/${comment.id}/edit`}>
                Edit
              </Link>
              <Link className="btn btn-center bg-danger text-light fw-bold p-2" to="/comments" onClick={() => {handleDeleteComment(id)}}>
                Delete
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsDisplay;
