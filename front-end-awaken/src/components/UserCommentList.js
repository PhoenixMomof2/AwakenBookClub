import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import UserCommentCard from "../components/UserCommentCard";

const UserCommentList = () => {
  const { user } = useContext(UserContext);
  console.log(user, "UserCommentList");

  return (
    <div className="container-flex col-10">
      <div className="row">
        <ul className="">
          {user.comments.map((comment) => (
            <UserCommentCard key={comment.id} comment={comment} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserCommentList;
