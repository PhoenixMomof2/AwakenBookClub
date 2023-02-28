import React, { useContext } from "react";
import CommentCard from "../components/CommentCard";
import { CommentContext } from "../context/CommentContext";

const CommentList = () => {
  const { comments } = useContext(CommentContext);
  const commentCards = comments.map((comment) => (<CommentCard key={comment.id} comment={comment} />))

  return (
    <section id="comment-list">
      <div className="container bg-dark">
        <div className="col">
          { commentCards }
        </div>
      </div>
    </section>
  );
};

export default CommentList;