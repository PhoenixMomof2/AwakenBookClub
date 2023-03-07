import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CommentContext } from "../context/CommentContext";
import { UserContext } from "../context/UserContext";
import Body from "../components/Body";

const UpdateCommentForm = () => {
  const navigate = useNavigate()
  const { handleEditComment } = useContext(CommentContext)
  const { user, handleEditUserComment } = useContext(UserContext)
  const update = user.comments.find(comment => comment.user_id === user.id)
  
  const [comment, setComment] = useState(update.comment)
  const [user_id, setUser_Id] = useState(user.username)
  const [book_id, setBook_Id] = useState(user.book.title)
  const [errors, setErrors] = useState([])

  // debugger
  console.log(update, "Update Comment Form comment to update")

  const handleSubmit = (e) => {
    e.preventDefault()

    const updateCommentData = {
      comment,
      book_id: update.book_id,
      user_id: user.id
    }

    console.log(updateCommentData, "update comment form data before .then")
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
                handleEditComment(updatedComment) // update comments state
                handleEditUserComment(updatedComment) // update user comments state
                navigate(`/users/${user.id}/comments`)
              })
            } else {
              res.json().then((errorData) => {
                console.log(errorData.errors)
                // const errorLis = errorData.errors.map((e, ind) => <li key={ind}>{e}</li>)
                // setErrors(errorLis)
              })
            }
          })          
          //clear form
          // setComment("")
          // setUserName("")
          // setBook_Title("")
    }

  useEffect(() => {
    return () => {
      setErrors([]);
    };
  }, [setErrors]);

  return (
    <div className="container-flex">
      <div className="row justify-content-center">
      <div className="col-lg-6">
        <form className="my-5 justify-content-center text-center bg-dark border-dark p-3" onSubmit={handleSubmit}>
        <h4 className="bg-warning">Edit Comment</h4>
        <div className="form-group">
              <div className="mb-3 input-group">
                <span className="input-group-text">Title</span>
                <input
                  type="text"
                  className="form-control text-center"
                  id="book-id"
                  defaultValue={book_id}
                  onChange={(e) => setBook_Id(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="mb-3 input-group">
                <span className="input-group-text">Reader</span>
                <input
                  type="text"
                  className="form-control text-center"
                  id="user_id"
                  defaultValue={user_id}
                  onChange={(e) => setUser_Id(e.target.value)}
                />
              </div>
            </div>
        <div className="form-group">
          <div className="mb-3 input-group">
            <span className="input-group-text">Comment</span>
            <input
              type="text"
              className="form-control text-dark text-center"
              id="update-book-id"
              defaultValue={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </div>
          <input type="submit" className="btn bg-warning p-2 btn-outline-primary fw-bold" value="Submit" />
          <div className="text-light">{errors}</div>
        </form>
      </div>
    </div>
    <Body />
  </div>
  );
};

export default UpdateCommentForm




