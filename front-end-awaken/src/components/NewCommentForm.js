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
  const [user_id, setUser_Id] = useState(user.username)
  const [errors, setErrors] = useState("")

  console.log(user, "New Comment Form")

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
        <div className="col-10">
          <form
            className="my-5 justify-content-center text-center bg-dark border-dark p-3"
            onSubmit={handleSubmit}
          >
            <h4 className="bg-warning">Add New Comment</h4>      
            <div className="form-group text-center">
            <div className="mb-3 input-group">  
            <span className="input-group-text">Book Title</span>
              <select 
            id="book_id"
            defaultValue={book_id}
            onChange={(e) => setBook_Id(e.target.value)} >
              {user.books.map(book => (<option key={book.id} value={book.id}>{book.title}</option>))}
              </select>
              </div>   
              </div>   
              <div className="form-group text-center">
              <div className="mb-3 input-group">
                <span className="input-group-text">Username</span>
                <input
                  type="text"
                  className="form-control"
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
            <div className="text-light">{errors}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewCommentForm;