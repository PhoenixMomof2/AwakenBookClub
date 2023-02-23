import React, {useContext} from "react"
// import { Link }  from "react-router-dom"
import { UserContext } from "../context/UserContext"


const CommentsDisplay = ({comment}) => {
  const user = useContext(UserContext)
  const { id, username, age, bio, avatar } = user;

  return (
    <div className="col-6">
      <div className="list-group mt-3 p-3 bg-dark">
        <div className="list-group-item py-3" key={comment.id}>
          <div>{username}</div>
          <div className="pb-2">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </div>
          <h5 className="mb-1">{username}</h5>
          <p className="mb-1">
            {comment.comment}
          </p>
          <small>{username} | Age: {age}</small>
        </div>
      </div>
    </div>
  )
}

export default CommentsDisplay