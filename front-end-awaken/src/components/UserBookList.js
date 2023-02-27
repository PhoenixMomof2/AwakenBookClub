import React, { useContext } from "react";
import UserBookCard from "../components/UserBookCard";
import { UserContext } from "../context/UserContext";

const UserBookList = () => {
  const { user } = useContext(UserContext);
  console.log(user, "UserBookList")
  const userBooks = user.books.map((book) => (<UserBookCard key={book.id} book={book} />));
  
  return (
    <section id="user-book-list">
      <div className="container bg-dark py-5">
        <div className="row">
          {userBooks}
        </div>
      </div>
    </section>
  )
}

export default UserBookList