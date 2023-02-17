// src/context/BookGroupContext.js
import React, { createContext, useState, useEffect } from "react"

// // Create context
const BookGroupsContext = createContext();

const BookGroupsProvider = ({ children }) => {
  // value that will be given to the context
  const [book_groups, setBook_Groups] = useState([])
  // const [comments, setComments] = useState([]) //comments is an attribute of book_groups
  const [errors, setErrors] = useState([])
  // book_groups.map(bg => <BookCommentsList key={bg.id} bg={bg})
  // const { comments, user_id, book_id } = bg
  // const user_comments = book_groups[user_id]
  console.log("I'm in BookGroupsProvider")

  // fetch the book_groups
  useEffect(() => {
    const fetchBookGroups = () => {
      fetch("/book_groups")
        .then((res) => res.json())
        .then((data) => setBook_Groups(data))
        .catch((error) => console.log("An error occurred."))
    };
    fetchBookGroups()
  }, [])
 
  // // Updating comments state to add new comment.
  // const handleAddNewComment = (newComment) => {
  //   setComments([...comments, newComment])
  // }

  // // // Updating comments state to delete comment.
  // const handleDeleteComment = (id) => {
  //   const deletedComment = comments.filter(comment => comment.id !== id)
  //   setComments(deletedComment)
  // }

  // // Updating comments state to update comments.
  // const handleEditComment = (updatedComment) => {
  //   const updatedComments = comments.map((comment) => (comment.id === updatedComment.id ? updatedComment : comment))
  //   setComments(updatedComments)
  // }

  return (
    <BookGroupsContext.Provider value={book_groups}>
      {children}
    </BookGroupsContext.Provider>
  )
}

export { BookGroupsContext, BookGroupsProvider };