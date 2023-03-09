import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { CommentContext } from "../context/CommentContext";

const UserCommentList = () => {
  const { user, handleDeleteUserComment } = useContext(UserContext)
  const { handleDeleteComment } = useContext(CommentContext)
  
  console.log(user, "UserCommentList")

  const handleDeleteClick = (id) => {
    fetch(`/users/${user.id}/comments/${id}`, {
      method: "DELETE", 
      }).then(() => {
        handleDeleteComment(id)
        handleDeleteUserComment(id)
      console.log("Deleted")
      })
  }

  return (
    <div className="container list-group">
      <div className="col text-center bg-dark pt-2">    
        <div className="list-group-item bg-dark py-1 my-2">
          <h6 className="text-light bg-danger border border-2 border-dark py-2 fw-bolder text-center"><i className="bi bi-chat-heart-fill"></i> My Commentary</h6>          
          {user.comments.map((comment) => (           
          <div  key={comment.id} className="text-center">
          <div className="list-group p-2 bg-dark my-1">
            <div className="list-group-item">       
              <h6 className="text-success fst-italic"><i className="bi bi-chat-quote-fill"></i>{comment.format_created_at_date}</h6>
              <p className="mb-1 text-dark px-2">{comment.comment}</p>                    
              <small className="py-1 text-dark fst-italic">
              <i className="bi bi-calendar-plus text-secondary fw-bold">  Last updated: {comment.format_updated_at_date}</i>
              </small>     
          <div className="btn-group border mx-2 fw-bold border-warning"> 
            <Link
              className="btn btn-sm btn-dark py-2"
              aria-current="page"
              to={`/users/${user.id}/comments/${comment.id}/edit`}
            >
              Edit
            </Link>      
            <Link
              className="btn btn-sm btn-danger py-2"
              aria-current="page"
              to="#"
              onClick={() => {handleDeleteClick(comment.id)}} 
            >
              Delete
            </Link>    
          </div>           
          </div>
          </div>
          </div>))}
        </div>           
      </div>
    </div>
  )
}

export default UserCommentList;