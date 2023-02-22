import React, { useContext } from 'react'
import { CommentContext } from "../context/CommentContext"
import CommentsImage from "../images/CommentsImage.jpg"
import CommentsDisplay from "../components/CommentsDisplay"

const CommentsList = () => {
  const comments = useContext(CommentContext)
  const commentsList = comments.map(comment => <CommentsDisplay key={comment.id} comment={comment}/>)
   
  return (
    <div className="container-flex justify-content-center">
      <section id="comments" className="bg-light">
        <div className="container-flex">
          <div>
            <h2 className="text-dark text-center bg-success fw-bolder">
              <i className="bi bi-wechat"></i> Reader Comments
            </h2>
          </div>
        </div>
      </section>
      <section>
        <div className="row g-5 justify-content-around align-items-center">
        <div>
          <img
            src={CommentsImage}
            className="img-thumbnail"
            alt="placeholder"
          />
        </div>
        </div>
      </section>
      <section>
        <div>
        { commentsList }
        </div>
      </section>
    </div>
  )
}

export default CommentsList;