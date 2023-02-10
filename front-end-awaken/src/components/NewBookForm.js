import React, { useState } from "react";
import {redirect} from "react-router-dom";

// const {id, title, book_img, author, stars, category, content} = book;
const NewBookForm = ({ user }) => {

  const [title, setTitle] = useState("")
  const [book_img, setBook_Img] = useState("")
  const [author, setAuthor] = useState("")
  const [stars, setStars] = useState("")
  const [category, setCategory] = useState("")
  const [content, setContent] = useState("")

  const [errors, setErrors] = useState([]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
  
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
      postHeaders,
      body: JSON.stringify(newBookData),
    })
    .then((res) => res.json())
    .then((newBook) => handleAddNewBook(newBook)); // update state
    redirect(`/books/${newBook.id}`)

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
        <input type="text" name="title" id="title" value={title} onChange={handleChangeTitle}/>
      </div>
      <div>
        <label htmlFor="book_img">Book_img:</label>
        <input type="text" name="book_img" id="book_img" value={book_img} onChange={handleChangeBook_Img}/>
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input type="text" name="author" id="author" value={author} onChange={handleChangeAuthor}/>
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input type="text" name="category" id="category" value={category} onChange={handleChangeCategory}/>
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <input type="text" name="content" id="content" value={content} onChange={handleChangeContent}/>
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
  )
}

export default NewBookForm;
