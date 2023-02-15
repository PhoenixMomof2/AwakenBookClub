import React, { useContext } from "react";
import { BookGroupsContext } from "../context/BookGroupsContext";
import BookGroupsDisplay from "../components/BookGroupsDisplay";

const BookGroups = () => {
  const book_groups = useContext(BookGroupsContext);
  const groups = book_groups.map(group => <BookGroupsDisplay key={group.id} group={group} />);
  return (
    <section id="book-groups">
      {groups}
    </section>
  );
};

export default BookGroups;
