import React, { useContext } from 'react'
import { CommentContext } from "../context/CommentContext"
import CommentsImage from "../images/CommentsImage.jpg"
import CommentsDisplay from "../components/CommentsDisplay"

const CommentsList = () => {
  const comments = useContext(CommentContext)
  const commentsList = comments.map(comment => <CommentsDisplay key={comment.id} comment={comment}/>)
   
  return (
    <div className="container-fluid justify-content-center align-items-center bg-dark">
      <section id="comments">
          <div className="row">
            <h2 className="text-light text-center bg-dark fw-bolder pt-2">
              <i className="bi bi-wechat"></i> Reader Comments
            </h2>
          </div>
      </section>
      <section id="comments-image">
        <div className="container-fluid row justify-content-center pb-4">
          <img
            src={CommentsImage}
            className="img-sm px-5"
            alt="placeholder"
          />
        </div>
      </section>
      <section id="comment-list">
        <div className="container-fluid bg-danger">
          <div className="row">
          { commentsList }
          </div>
        </div>
      </section>
    </div>
  )
}

export default CommentsList;