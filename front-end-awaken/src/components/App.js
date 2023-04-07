import React from "react";
import { Route, Routes } from "react-router-dom";

//context
import { UserProvider } from "../context/UserContext";
import { BookProvider } from "../context/BookContext";

//static pages
import Navbar from "../components/Navbar";
import About from "../components/About";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";

//auth forms
import SignUp from "./SignUp";
import Login from "./Login";

//dynamic pages
import BookList from "./BookList";
import BookDetails from "./BookDetails";
import UserBookList from "./UserBookList";
import NewBookForm from "./NewBookForm";
import NewCommentForm from "./NewCommentForm";
import UpdateCommentForm from "./UpdateCommentForm";

const App = () => {
  return (
    <div className="container-flex bg-danger" style={{'paddingTop': '85px'}}>
      <UserProvider>
        <BookProvider>         
            <Navbar />
            <Header />
            <Routes>
              <Route path="*" element={<About />} />
              <Route path="/home" element={<Home />} />         
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/books" element={<BookList />} />
              <Route path="/books/:id" element={<BookDetails />} />          
              <Route path="/books/new" element={<NewBookForm />} />    
              <Route path="/my_books" element={<UserBookList />} />
              <Route path="/comments/new" element={<NewCommentForm />} />
              <Route path="/my_books/:id/edit" element={<UpdateCommentForm />} />       
            </Routes>
            <Footer />         
        </BookProvider>
      </UserProvider>
    </div>
  );
};

export default App;
