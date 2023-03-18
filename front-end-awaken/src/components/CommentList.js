import React, { useContext } from "react";
import CommentCard from "../components/CommentCard";
import { CommentContext } from "../context/CommentContext";

const CommentList = () => {
  const { comments } = useContext(CommentContext);
  const commentCards = comments.map((comment) => (<CommentCard key={comment.id} comment={comment} />))

  return (
      <div className="container bg-dark list-group">
        <div className="col text-center bg-dark pt-2">
          { commentCards }
        </div>
      </div>
  );
};

export default CommentList;