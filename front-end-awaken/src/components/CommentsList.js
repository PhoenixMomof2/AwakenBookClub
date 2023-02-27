import React, { useContext } from "react";
import HoldHands from "../images/HoldHands.jpg";
import CommentsCard from "../components/CommentsCard";
import { CommentContext } from "../context/CommentContext";


const CommentsList = () => {
  const { comments } = useContext(CommentContext);
  const commentsList = comments.map((comment) => (<CommentsCard key={comment.id} comment={comment} />));

  return (
    <div className="container-fluid justify-content-center align-items-center bg-dark">
       <h2 className="text-light text-center bg-dark fw-bolder py-2">
        <i className="bi bi-wechat"></i> Reader Comments
      </h2>
      <div className="row">
        <div className="container col">
        <img src={HoldHands} className="img-thumbnail" alt="placeholder" />
        </div>
        <div className="container col">{commentsList}</div>
      </div>
    </div>
  );
};

export default CommentsList;