import React, { useContext } from 'react'
import { UserContext } from "../context/UserContext";
import UserBookCard from "../components/UserBookCard";

const UserComments = () => {
  const { user } = useContext(UserContext)
    
  return (
    <div className="container-flex col-10">
      <ul className="">{user.comments.map((comment) => (
        <UserBookCard key={comment.id} comment={comment} />))}
      </ul>
    </div>
  )
}

export default UserComments