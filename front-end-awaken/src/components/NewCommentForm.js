import React, { useState, useContext } from "react";
import { CommentContext } from "../context/CommentContext";

const NewCommentForm = () => {
  const { comments, handleAddNewComment } = useContext(CommentContext);
  const [new_comment, setNew_Comment] = useState("");
  // const [errors, setErrors] = useState([]);

  // const { id } = useParams()
  // const navigate = useNavigate();
  console.log(comments)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit clicked");

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
  };

  return (
    <div className="container-flex mx-auto mt-3 px-2 bg-warning">
      <div className="row d-block">
        <h3>Add New Comment</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="comments">Comment:</label>
            <input
              type="text"
              name="comments"
              id="comments"
              value={new_comment}
              onChange={(e) => setNew_Comment(e.target.value)}
            />
          </div>
          <input type="submit" className="btn btn-secondary" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default NewCommentForm;
