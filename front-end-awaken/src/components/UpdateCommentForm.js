import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Body from "../components/Body";
import { BookContext } from "../context/BookContext";

const UpdateCommentForm = () => {
  const navigate = useNavigate()  
  const { id } = useParams()
  let { state } = useLocation()
  
  const { user, handleEditUserComment } = useContext(UserContext)
  const {handleUpdateBookComments} = useContext(BookContext)
  const { books } = useContext(BookContext)   
  const getBook = books.find(book => book.id === parseInt(id))
  const bookToEdit = user.books.find(book => book.id === getBook.id)
  // debugger
  const commentToEdit = state.comment
  const [comment, setComment] = useState(commentToEdit.comment)
  const [errors, setErrors] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const updateCommentData = {
      comment,
    }
    
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
              console.log(edit)
              // 1- update user comments
              // 2- update user books
              // 3- update book comments
              
              const updatedBookComments = bookToEdit.comments.map((comment) => comment.id === edit.id ? edit : comment) // update book comments
              const updatedBook = {...getBook, comments: updatedBookComments} // update book
              const newUserBooks = user.books.map((b) => b.id === updatedBook.id ? updatedBook : b)
              const updatedUser = {...user, books: newUserBooks} // update user
              handleEditUserComment(updatedUser) // update user books       
              handleUpdateBookComments(updatedBook) // update books state
              navigate("/me")
              })
            } else {
              res.json().then((errorData) => {            
                const errorLis = errorData.errors.map((e, ind) => <li key={ind}>{e}</li>)
                setErrors(errorLis)
                console.log(errorData.errors)    
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
            <span className="input-group-text bg-danger text-light fw-bold">BOOK TITLE</span>
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