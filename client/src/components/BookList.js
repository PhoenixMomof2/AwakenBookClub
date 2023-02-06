import React from "react";
// import { BookContext, BookProvider } from "../context/BookContext";
import BookItem from "../components/BookItem";

const BookList = ({books}) => {
  // const [books, setBooks] = useState([]);
  // const book = {
  //   title: title,
  //   book_img: book_img,
  //   author: author, 
  //   stars: stars, 
  //   category: category,
  //   content: content
  // }
  
  return (
   // <BookProvider>
      <div className="container">
        <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
        </ul>
      </div>
   // </BookProvider>
  )
}

export default BookList;
