import React, { useState, useEffect, useContext } from "react"; 
import { useNavigate } from "react-router-dom";
import { CommentContext } from "../context/CommentContext";
// import { UserContext } from "../context/UserContext";
// import { BookContext } from "../context/BookContext";

const NewCommentForm = ({ book }) => {
  const [comment, setComment] = useState("");
  const [title, setTitle] = useState([]);
  const navigate = useNavigate();
  const { handleAddNewComment, setErrors } = useContext(CommentContext);
  // const {user} = useContext(UserContext)
  // const {book} = useContext(BookContext)
  console.log(book, "NewCommentForm");

  const handleSubmit = (e) => {
    e.preventDefault();

    //UPDATE (PATCH REQUEST)
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment, book.id),
    }).then((res) => {
      if (res.ok) {
        res.json().then((comment) => handleAddNewComment(comment)); // update state
        navigate("/comments");
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
    // clear form
    setComment("");
  };

  // useEffect(() => {
  //   return () => {
  //     setErrors([]);
  //   };
  // }, [setErrors]);

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
                <span className="input-group-text">Book Title </span>
                <input
                  type="text"
                  className="form-control text-center"
                  id="new-book-id"
                  defaultValue={comment.title}
                  onChange={(e) => setTitle(e.target.value)}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewCommentForm;
