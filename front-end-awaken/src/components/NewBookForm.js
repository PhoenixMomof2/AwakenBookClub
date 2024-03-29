import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import { UserContext } from "../context/UserContext";

const NewBookForm = () => {
  const { handleAddNewBook, handleUpdateBookComments } = useContext(BookContext)
  const { user, handleAddNewUserBookAfterNewComment } = useContext(UserContext)
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [book_img, setBook_Img] = useState("")
  const [author, setAuthor] = useState("")
  const [stars, setStars] = useState("")
  const [category, setCategory] = useState("")
  const [content, setContent] = useState("")

  const [comment, setComment] = useState("")
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
    fetch(`/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBookData),
    })
    .then((res) => res.json())
    .then((newBook) => {
            
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
                // 1 - add new comment to user.book.comments 
                const updatedBookComments = [...newBook.user_comments, newComment]
                
                // 2 - update book users and user_comments
                const updatedBook = {...newBook, user_comments: updatedBookComments}
                
                // 2 - update user books
                const updatedUserBooks = [...user.books, updatedBook]
                
                // 4 - update user and books state             
                handleAddNewUserBookAfterNewComment(updatedUserBooks)
                handleUpdateBookComments(updatedBook)              
                handleAddNewBook(updatedBook) // update books state
                navigate("/my_books")
              })
            } else {
              res.json().then((errorData) => {
                const errorLis = errorData.errors.map((e, ind) => <li key={ind}>{e}</li>)
                setErrors(errorLis);
              })
            }
          }) 
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
                <textarea
                  className="form-control pt-2 text-dark text-justify" 
                  placeholder="Enter content here..."
                  style={{height: '150px'}}
                  id="content-textarea"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                >
                </textarea>                
              </div>
            </div>
            <h4 className="bg-warning">Add A Comment</h4>          
              <div className="form-group">
                <div className="mb-3 input-group">
                  <span className="input-group-text">Username</span>
                  <span className="input-group-text bg-danger text-light fw-bold">{user.username}</span>
                </div>
              </div>                 
              <div className="form-group">
              <div className="form-floating">                  
                <textarea
                  className="form-control pt-2 text-dark text-justify" 
                  placeholder="Type comment here..."
                  style={{height: '150px'}}
                  id="comment-textarea"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                >
                </textarea>
              </div>
              </div>           
            <button
              type="submit"
              className="btn bg-warning mt-3 btn-outline-primary fw-bold"
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