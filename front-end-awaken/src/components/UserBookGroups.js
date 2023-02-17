import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BookGroupsContext } from "../context/BookGroupsContext";

const UserBookGroups = () => {
  const { id } = useParams();
  const book_groups = useContext(BookGroupsContext);
  // debugger
  // const groups = book_groups.map((group) => (
  //   <UserBookGroups key={`${group.id}`} group={group} />
  // ));
  return <div id="book-groups">User Book Group</div>;
};

export default UserBookGroups;
