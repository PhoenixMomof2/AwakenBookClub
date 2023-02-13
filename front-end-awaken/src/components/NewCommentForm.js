import React, { useState } from "react";
import {redirect} from "react-router-dom";
import { postMethodHeaders } from "./Globals";

const NewCommentForm = () => {

  const [comments, setComments] = useState("")
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newCommentData = {
      comments,
      user_id: user.id,
      book_id: book.id
    };
    console.log(newCommentData);
  
    fetch("/book_groups/book_id/comments", {
      postMethodHeaders,
      body: JSON.stringify(newCommentData),
    })
    .then((res) => {
      if (res.ok) {
        setIsLoading(false);
        res.json().then((newComment) => handleAddNewComment(newComment)); // update state
        redirect(`/comments/${newComment.id}`); // redirect to newComment show route
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    })
    // clear form
    setComments("")
    
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
        <input type="submit" class="btn btn-secondary"value="Submit" />
      </form>
    </div>
  </div>
  )
}

export default NewCommentForm;
