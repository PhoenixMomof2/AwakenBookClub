import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Body from "../components/Body";
import { BookContext } from "../context/BookContext";

const UpdateCommentForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { user, handleEditUserComment } = useContext(UserContext); 
  const { books, handleUpdateBookComments } = useContext(BookContext);

  let { state } = useLocation();
  const commentToEdit = state.comment;
  const getBookToEdit = books.find((book) => book.id === parseInt(id));
  console.log(getBookToEdit, "getBookToEdit");

  const [comment, setComment] = useState(commentToEdit.comment);
  const [errors, setErrors] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const updateCommentData = {
      comment,
    };

    //UPDATE (PATCH REQUEST)
    fetch(`/users/${user.id}/comments/${commentToEdit.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateCommentData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((edit) => {
          console.log(edit, "edited comment");

          // 1 - update book (book.user_comments) and ?###book users###?
          const updatedBookComments = getBookToEdit.user_comments.map((comment) =>
          comment.id === edit.id ? edit : comment
          )

          // 2 - update book      
          const updatedUserBook = {...getBookToEdit, user_comments: updatedBookComments} 
          
          // 3 - update user books
          const updatedUserBooks = user.books.map((b) =>
              b.id === updatedUserBook.id ? updatedUserBook : b
            );

          // 4 - update user
          const updatedUser = { ...user, books: updatedUserBooks }; 
          
          handleUpdateBookComments(updatedUserBook); // 6 - update books state
          handleEditUserComment(updatedUser); // 7 - update user books state
          console.log(updatedUser, "after update submit");
          navigate("/my_books");
        });
      } else {
        res.json().then((errorData) => {
          const err = errorData.error
          console.log(err, "errors")
          setErrors(err);
        });
      }
    });
    //clear form
    // setComment("")
  };

  useEffect(() => {
    return () => {
      setErrors([]);
    };
  }, [setErrors]);

  return (
    <div className="container-flex">
      <div className="row justify-content-center">
        <form
          className="my-5 justify-content-center text-center bg-dark border-dark p-3"
          onSubmit={handleSubmit}
        >
          <h4 className="bg-warning">Edit Comment</h4>
          <div className="form-group">
            <div className="justify-content-center pt-2 mb-3 input-group">
              <span className="input-group-text">Book Title</span>
              <span className="input-group-text bg-danger text-light fw-bold">
                {getBookToEdit.title}
              </span>
            </div>
          </div>
          <div className="form-group">
            <div className="form-floating">
              <textarea
                className="form-control pt-2 text-dark text-justify"
                style={{ height: "150px" }}
                id="comment-textarea"
                defaultValue={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            className="btn bg-warning mt-3 btn-outline-primary fw-bold"
            value="Submit"
          />
          <div className="text-light">{errors}</div>
        </form>
      </div>
      <Body />
    </div>
  );
};

export default UpdateCommentForm;
