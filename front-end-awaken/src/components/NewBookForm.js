import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import { UserContext } from "../context/UserContext";
import { CommentContext } from "../context/CommentContext";

const NewBookForm = () => {
  const { handleAddNewBook } = useContext(BookContext)
  const { user, handleAddNewUserBook } = useContext(UserContext)
  const { handleAddNewComment } = useContext(CommentContext) 
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [book_img, setBook_Img] = useState("")
  const [author, setAuthor] = useState("")
  const [stars, setStars] = useState("")
  const [category, setCategory] = useState("")
  const [content, setContent] = useState("")

  const [comment, setComment] = useState("")
  const [username, setUsername] = useState(user.username)
  const [errors, setErrors] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newBookData = {
      title, 
      book_img, 
      author, 
      stars, 
      category, 
      content
    }
    
    // CREATE (POST REQUEST BOOK)
    fetch(`/users/${user.id}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBookData),
    })
    .then((res) => res.json())
    .then((newBook) => {
          
        handleAddNewBook(newBook) // update books state
        handleAddNewUserBook(newBook) // update user books state
        console.log(newBook)

        const newCommentData = {
          comment,
          user_id: user.id,
          book_id: newBook.id
        }
        
        //CREATE (POST REQUEST COMMENT)
          fetch(`/users/${user.id}/comments`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newCommentData),
          }).then((res) => {
            if (res.ok) {
              res.json().then((newComment) => {
                handleAddNewComment(newComment)// update state
                navigate("/me")
              })
            } else {
              res.json().then((errorData) => {
                const errorLis = errorData.errors.map((e, ind) => <li key={ind}>{e}</li>)
                setErrors(errorLis);
              })
            }
          }) // update state
      })
        // clear form
        // setTitle("")
        // setBook_Img("")
        // setAuthor("")
        // setStars("")
        // setCategory("")
        // setContent("")
        // setComment("")
      }
   
  useEffect(() => {
    return () => {
      setErrors([])
    }
  }, [setErrors])

  return (
    <div className="container-flex">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form
            className="form my-5 justify-content-center text-center bg-dark border-dark p-3"
            onSubmit={handleSubmit}
          >
            <h4 className="bg-warning">Add A New Book</h4>
            <div className="form-group">
              <div className="mb-3 input-group">
                <span className="input-group-text">Title</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Title"
                  aria-label="title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="mb-3 input-group">
                <span className="input-group-text">Book Image Url</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Book Image Url"
                  aria-label="book-image-url"
                  id="book-image-url"
                  value={book_img}
                  onChange={(e) => setBook_Img(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="mb-3 input-group">
                <span className="input-group-text">Author</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Author"
                  aria-label="author"
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="mb-3 input-group">
                <span className="input-group-text">Stars</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Stars"
                  aria-label="stars"
                  id="stars"
                  value={stars}
                  onChange={(e) => setStars(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="mb-3 input-group">
                <span className="input-group-text">Category</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Category"
                  aria-label="category"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="mb-3 input-group">
                <span className="input-group-text">Content</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Content"
                  aria-label="content"
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
            </div>
            <h4 className="bg-warning">Add A Comment</h4>
            <div className="form-group">
              <div className="mb-3 input-group">
                <span className="input-group-text">Username</span>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  defaultValue={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="mb-3 input-group">
                <span className="input-group-text">Comment</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Comment"
                  aria-label="comment"
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn bg-warning p-2 btn-outline-primary fw-bold"
            >
              Submit New Book
            </button>
            <div className="text-light">{errors}</div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewBookForm;