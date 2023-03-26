// src/context/CommentContext.js
import React, { createContext, useState, useEffect } from "react"

// Create context
const CommentContext = createContext()

const CommentProvider = ({ children }) => {
  // value that will be given to the context
const [comments, setComments] = useState([])
const [errors, setErrors] = useState([])
 
// fetch the comments
  useEffect(() => {
    const fetchComments = () => {
      fetch("/comments")
        .then((res) => res.json())
        .then((data) => setComments(data))
        .catch((error) => console.log("An error occurred."))
    };
    fetchComments()
  }, [])

  // Updating comments state to add new comment
  // const handleAddNewComment = (newComment) => {
  //   setComments([...comments, newComment])
  // }

  // Updating comments state after a user edits a comment
  // const handleEditComment = (updatedComment) => {
  //   console.log(updatedComment, "handleEditComment")
  //   const updatedComments = comments.map((comment) => (comment.id === updatedComment.id ? updatedComment : comment))
  //   setComments(updatedComments);
  // }

  // // Updating comments state after a user deletes a comment
  // const handleDeleteComment = (deletedComment) => {  
  //   const filteredComments = comments.filter(comment => comment.id !== deletedComment)
  //   setComments(filteredComments)
  // }

  return (
    <CommentContext.Provider value={{comments, setErrors, errors}}>
      {children}
    </CommentContext.Provider>
  )
}

export { CommentContext, CommentProvider };