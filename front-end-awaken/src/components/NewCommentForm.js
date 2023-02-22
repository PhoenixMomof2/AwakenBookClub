import React, { useState, useContext, useParams } from "react";
import { useNavigate } from "react-router-dom";
import { postMethodHeaders } from "./Globals";
import { BookGroupsContext } from "../context/BookGroupsContext";

const NewCommentForm = () => {
  // const { book_groups, handleAddNewComment } = useContext(BookGroupsContext);
  // const { id } = useParams()
  // const navigate = useNavigate();
  const [comments, setComments] = useState("")
  // const [errors, setErrors] = useState([]);
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit clicked")
    
  //   fetch(`/book_groups/${id}`, {
  //     postMethodHeaders,
  //     body: JSON.stringify({}),
  //   })
  //   .then((res) => {
  //     if (res.ok) {
  //       res.json().then((newComment) => handleAddNewComment(newComment)); // update state
  //       navigate("/comments"); 
  //     } else {
  //       res.json().then((err) => setErrors(err.errors));
  //     }
  //   })
  //   // clear form
  //   setComments("")
    
  }
  
return (
  <div className="container-flex mx-auto mt-3 px-2 bg-warning">
    <div className="row d-block">
      <h3>Add New Comment</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="comments">Comment:</label>
          <input type="text" name="comments" id="comments" value={comments} onChange={(e) => setComments(e.target.value)}/>
        </div>
        <input type="submit" className="btn btn-secondary"value="Submit" />
      </form>
    </div>
  </div>
  )
}

export default NewCommentForm;
