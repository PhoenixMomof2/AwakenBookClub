import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { BookContext } from "../context/BookContext";

const NewCommentForm = () => {
  const navigate = useNavigate();
  const { user, handleAddNewUserComment, handleAddNewUserBookAfterNewComment } =
    useContext(UserContext);
  const { books, handleUpdateBookComments } = useContext(BookContext);

  const [comment, setComment] = useState("");
  const [book_id, setBook_Id] = useState(books[0].id);
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCommentData = {
      comment,
      book_id,
      user_id: user.id,
    };

    //CREATE (POST REQUEST)
    fetch(`/users/${user.id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCommentData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((newComment) => {         
          const newBookToAdd = books.find((book) => book.id === newComment.book_id)          
          const newBookToAddToUser = user.books.find(
            (book) => book.id === newBookToAdd.id
            );

          // 1 - update book comments (book.user_comments)
          const updatedBookComments = [
            ...newBookToAdd.user_comments,
            newComment,
          ]; 

          // 2 -update book
          const updatedBook = {
            ...newBookToAdd,
            user_comments: updatedBookComments, // *******
          }; 

          if (!newBookToAddToUser) {
            // 3 - check to see if book already exists in user's books array
            console.log(user, "The book does not exist.");

            // 4 - if not, add user to book users array
            const updatedBookUsers = [...updatedBook.users, user]; 

            // 5 - update book users array  
            const updatedBook2 = { ...updatedBook, users: updatedBookUsers, user_comments: updatedBookComments }; // **** 

            // 6 - update user books
            const updatedUserBooks = [...user.books, updatedBook2]; 
            
            // 7 - update user books state
            handleAddNewUserBookAfterNewComment(updatedUserBooks); 

            // 8 - update books state
            handleUpdateBookComments(updatedBook2); 
          } else {
            console.log(user, "Already a user book.");
            // comments are in 2 places (book.user_comments, user.book.user_comments)
            const bookToAddCommentTo = books.find(
              (book) => book.id === newBookToAdd.id
            ); //get book

            // 1 - update book comments (book.user_comments) with new comment
            const updatedBookComments = [
              ...bookToAddCommentTo.user_comments,
              newComment,
            ]; 

             // 2 - update book
            const updatedUserBook = {
              ...bookToAddCommentTo,
              user_comments: updatedBookComments,
            };
            
            // 3 - update user books
            const newUserBooks = user.books.map((b) =>
              b.id === updatedUserBook.id ? updatedUserBook : b
            ); 
            
            // 4 - update User
            const updatedUser = { ...user, books: newUserBooks };

            handleAddNewUserComment(updatedUser); // update user books
            handleUpdateBookComments(updatedUserBook); // update books state
          }
          navigate("/my_books");
        });
      } else {
        res.json().then((res) => {
          console.log(res.errors);
          const errorLis = res.errors.map((e, ind) => (
            <li key={ind}>{e}</li>
          ));
          setErrors(errorLis);
        });
      }
    });
    // clear form
    // setComment("")
    // setUserName("")
    // setBook_Title("")
  };

  useEffect(() => {
    return () => {
      setErrors([]);
    };
  }, [setErrors]);

  return (
    <div className="container-flex">
      <div className="row justify-content-center">
        <div className="form-group col-10">
          <form
            className="my-5 justify-content-center text-center bg-dark border-dark p-2"
            onSubmit={handleSubmit}
          >
            <h4 className="bg-warning">Add New Comment</h4>
            <div className="form-group mb-3 text-center">
              <span className="form-group input-group-text">
                <i className="bi bi-book-half me-2"></i>
                <select
                  className="form-group"
                  id="book_id"
                  defaultValue={book_id}
                  onChange={(e) => setBook_Id(e.target.value)}
                >
                  {books.map((book) => (
                    <option key={book.id} value={book.id}>
                      {book.title}
                    </option>
                  ))}
                </select>
              </span>
            </div>
            <div className="form-group text-center">
              <div className="mb-3 input-group">
                <span className="input-group-text">Username</span>
                <span className="input-group-text bg-danger text-light fw-bold">
                  {user.username}
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
              className="btn bg-warning mt-2 btn-outline-primary fw-bold"
              value="Submit"
            />
            <div className="text-light">{errors}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewCommentForm;
