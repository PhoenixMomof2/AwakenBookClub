import React, { useState, useEffect, useContext } from "react"; 
import { useNavigate } from "react-router-dom";
import { CommentContext } from "../context/CommentContext";
import { UserContext } from "../context/UserContext";

const NewCommentForm = () => {
  const navigate = useNavigate()
  const { handleAddNewComment } = useContext(CommentContext) 
  const { user, handleAddNewUserComment } = useContext(UserContext)
 
  const [comment, setComment] = useState("")
  const [book_id, setBook_Id] = useState("")
  const [errors, setErrors] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const newCommentData = {
      comment, 
      book_id, 
      user_id: user.id
    }
    
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
          handleAddNewComment(newComment) // update comments state
          handleAddNewUserComment(newComment) // update user comments state
          navigate(`/users/${user.id}/comments`)
        })        
      } else {
        res.json().then((errorData) => {
          const errorLis = errorData.errors.map((e, ind) => <li key={ind}>{e}</li>)
          setErrors(errorLis)
        })
      }
    })
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
            <span className="form-group input-group-text"><i className="bi bi-book-half me-2"></i>
              <select 
              className="form-group"
              id="book_id"
              defaultValue={book_id}
              onChange={(e) => setBook_Id(e.target.value)} >
              {user.books.map(book => (<option key={book.id} value={book.id}>{book.title}</option>))}
              </select>
            </span>              
              </div>   
              <div className="form-group text-center">
              <div className="mb-3 input-group">
                <span className="input-group-text">Username</span>
                <span className="input-group-text bg-danger text-light fw-bold">{user.username}</span>
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