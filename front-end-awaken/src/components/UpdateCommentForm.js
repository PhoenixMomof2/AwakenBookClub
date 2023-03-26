import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Body from "../components/Body";
// import { CommentContext } from "../context/CommentContext";
import { BookContext } from "../context/BookContext";

const UpdateCommentForm = () => {
  const navigate = useNavigate()  
  const { id } = useParams()
  const { user, handleEditUserComment } = useContext(UserContext)
  const { books } = useContext(BookContext)   
  const getBook = books.find(book => book.id === parseInt(id))
  const bookToEdit = user.books.find(book => book.id === getBook.id)
  const commentToEdit = bookToEdit.comments.find(comment => comment.book_id === bookToEdit.id)
      
  const [comment, setComment] = useState(commentToEdit.comment)
  const [errors, setErrors] = useState([])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const updateCommentData = {
      comment,
    }
    
    //UPDATE (PATCH REQUEST)
    fetch(`/my_books/${commentToEdit.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateCommentData),
    }).then((res) => { 
      if (res.ok) {
        res.json().then((edit) => {   
              const updatedUserComments = bookToEdit.comments.map((c) => c.id === edit.id ? edit : c)
              const updatedBook = {...bookToEdit, comments: updatedUserComments}
              const updatedUserBooks = [...user.books, updatedBook]
              debugger
              handleEditUserComment(updatedUserBooks) // update user book comments state                 
              navigate("/my_books")
              })
            } else {
              res.json().then((errorData) => {            
                console.log(errorData.message)    
                // const errorLis = errorData.errors.map((e, ind) => <li key={ind}>{e}</li>)
                // setErrors(errorLis)
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