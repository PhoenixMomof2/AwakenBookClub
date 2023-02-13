import React, { useState } from "react";
import {redirect} from "react-router-dom";
import { postMethodHeaders } from "../components/Globals";

const NewBookForm = ({ newBook, handleAddNewBook }) => {

  const [title, setTitle] = useState("")
  const [book_img, setBook_Img] = useState("")
  const [author, setAuthor] = useState("")
  const [stars, setStars] = useState("")
  const [category, setCategory] = useState("")
  const [content, setContent] = useState("")
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newBookData = {
      title,
      book_img,
      author,
      stars,
      category,
      content
    };
    console.log(newBookData);
  
    fetch("/books", {
      postMethodHeaders,
      body: JSON.stringify(newBookData),
    })
    .then((res) => {
      if (res.ok) {
        setIsLoading(false);
        res.json().then((newBook) => handleAddNewBook(newBook)); // update state
        redirect(`/books/${newBook.id}`); // redirect to newBook show route
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    })
    // clear form
    setTitle("")
    setBook_Img("")
    setAuthor("")
    setStars("")
    setCategory("")
    setContent("")
  }
  
return (
  <div>
    <h3>Add New Book</h3>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="book_img">Book_img:</label>
        <input type="text" name="book_img" id="book_img" value={book_img} onChange={(e) => setBook_Img(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input type="text" name="author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="stars">Stars:</label>
        <input type="text" name="stars" id="stars" value={stars} onChange={(e) => setStars(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input type="text" name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <input type="text" name="content" id="content" value={content} onChange={(e) => setContent(e.target.value)}/>
      </div>
      <input type="submit" class="btn btn-secondary"value="Submit" />
    </form>
  </div>
  )
}

export default NewBookForm;
