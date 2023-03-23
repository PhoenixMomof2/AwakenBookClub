import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CommentContext } from "../context/CommentContext";
import { UserContext } from "../context/UserContext";
import Body from "../components/Body";

const UpdateCommentForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { handleEditComment } = useContext(CommentContext)
  const { user, handleEditUserComment } = useContext(UserContext)
  const update = user.comments.find(comment => comment.id === parseInt(id))

  const [comment, setComment] = useState(update.comment)
  const [errors, setErrors] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const updateCommentData = {
      comment,
    }

    // console.log(updateCommentData, "update comment form data before .then")
    
    //UPDATE (PATCH REQUEST)
    fetch(`/users/${user.id}/comments/${update.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateCommentData),
        })
          .then((res) => { 
            if (res.ok) {
              res.json().then((updatedComment) => {
                console.log(updatedComment, "updated comment")
                handleEditComment(updatedComment) // update comments state
                handleEditUserComment(updatedComment) // update user comments state
                navigate("/my_books")
              })
            } else {
              res.json().then((errorData) => {                
                const errorLis = errorData.errors.full_messages.map((e, ind) => <li key={ind}>{e}</li>)
                setErrors(errorLis)
              })
            }
          })          
          //clear form
          // setComment("")
    }

  useEffect(() => {
    return () => {
      setErrors([]);
    };
  }, [setErrors]);

  return (
    <div className="container-flex">
      <div className="row justify-content-center">
             <form className="my-5 justify-content-center text-center bg-dark border-dark p-3" onSubmit={handleSubmit}>
        <h4 className="bg-warning">Edit Comment</h4>
        <div className="form-group">
          <div className="justify-content-center pt-2 mb-3 input-group">
            <span className="input-group-text">Book Title</span>
            <span className="input-group-text bg-danger text-light fw-bold">{update.book.title}</span>
          </div>
        </div>
        <div className="form-group">
          <div className="form-floating">                  
            <textarea
              className="form-control pt-2 text-dark text-justify" 
              style={{height: '150px'}}
              id="comment-textarea"
              defaultValue={comment}
              onChange={(e) => setComment(e.target.value)}
            >
            </textarea>
          </div>
        </div>
          <input type="submit" className="btn bg-warning mt-3 btn-outline-primary fw-bold" value="Submit" />
          <div className="text-light">{errors}</div>
        </form>
      </div>
    <Body />
  </div>
  );
};

export default UpdateCommentForm