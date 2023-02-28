import React, { useState, useEffect, useContext } from "react"; 
import { useNavigate } from "react-router-dom";
import { CommentContext } from "../context/CommentContext";
import { UserContext } from "../context/UserContext";

const NewCommentForm = ({book}) => {
  const [comment, setComment] = useState("");
  const [book_title, setBook_Title] = useState("");
  const [username, setUsername] = useState("")
  const navigate = useNavigate();
  const { user } = useContext(UserContext)
  const { handleAddNewComment, errors, setErrors } = useContext(CommentContext);
  console.log(user, book, "NewCommentForm");

  const newCommentData = {
    comment, 
    book_id: book.id, 
    user_id: user.id
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked submit new comment")
    //UPDATE (PATCH REQUEST)
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCommentData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((comment) => handleAddNewComment(comment)); // update state
        navigate("/user/comments");
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
    // clear form
    setComment("");
  };

  useEffect(() => {
    return () => {
      setErrors([]);
    };
  }, [setErrors]);

  return (
    <div className="container-flex">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form
            className="my-5 justify-content-center text-center bg-dark border-dark p-3"
            onSubmit={handleSubmit}
          >
            <h4 className="bg-warning">Add New Comment</h4>
            <div className="form-group text-center">
              <div className="mb-3 input-group">
                <span className="input-group-text">Username</span>
                <input
                  type="text"
                  className="form-control text-center"
                  id="username"
                  defaultValue={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group text-center">
              <div className="mb-3 input-group">
                <span className="input-group-text">Book Title</span>
                <input
                  type="text"
                  className="form-control text-center"
                  id="new-book-id"
                  defaultValue={book_title}
                  onChange={(e) => setBook_Title(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group text-center">
              <div className="mb-3 input-group">
                <span className="input-group-text">Comment</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Comment"
                  aria-label="Comment"
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
            </div>
            <input
              type="submit"
              className="btn bg-warning p-2 btn-outline-primary fw-bold"
              value="Submit"
            />
            <div>{errors}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewCommentForm;
