import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CommentContext } from "../context/CommentContext";
import Body from "../components/Body";

const UpdateCommentForm = ({getBook}) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const {comments, handleEditComment } = useContext(CommentContext);
  const update = comments.find(comment => comment.id === parseInt(id))
  

  console.log(update, "Update Form")

  const [comment, setComment] = useState("");
  const [username, setUsername] = useState(update.user.username);
  const [title, setTitle] = useState(update.book.title);

  // debugger
  const handleSubmit = (e) => {
    e.preventDefault();

    const updateCommentData = {
      comment, 
      book_id: update.book_id, 
      user_id: update.user_id
    }

    //UPDATE (PATCH REQUEST)
    fetch(`/comments${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateCommentData),
        })
          .then((res) => res.json())
          .then((data) => {
            handleEditComment(data);
            navigate("/user/comments");
          })
          
          //clear form
          setComment("")
  }

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
                  defaultValue={update.book.title}
                  onChange={(e) => setTitle(title)}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="mb-3 input-group">
                <span className="input-group-text">Reader</span>
                <input
                  type="text"
                  className="form-control text-center"
                  id="username"
                  defaultValue={update.user.username}
                  onChange={(e) => setUsername(username)}
                />
              </div>
            </div>
        <div className="form-group">
          <div className="mb-3 input-group">
            <span className="input-group-text">Comment</span>
            <input
              type="text"
              className="form-control text-center"
              id="update-book-id"
              defaultValue={update.comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </div>
          <input type="submit" className="btn bg-warning p-2 btn-outline-primary fw-bold" value="Submit" />
        </form>
      </div>
    </div>
    <Body />
  </div>
  );
};

export default UpdateCommentForm




