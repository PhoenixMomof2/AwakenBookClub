import React from "react";
import { Route, Routes } from "react-router-dom";

//context
import { UserProvider } from "../context/UserContext";
import { BookProvider } from "../context/BookContext";
import { CommentProvider } from "../context/CommentContext";

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
import Profile from "./Profile";
import ReaderForum from "./ReaderForum";
import BookList from "./BookList";
import BookDetails from "./BookDetails";
import CommentList from "./CommentList";
import CommentDetails from "./CommentDetails";
import UserBookList from "./UserBookList";
import NewBookForm from "./NewBookForm";
import UserCommentList from "./UserCommentList";
import NewCommentForm from "./NewCommentForm";
import UpdateCommentForm from "./UpdateCommentForm";

const App = () => {
  return (
    <div className="container-flex bg-danger" style={{'paddingTop': '85px'}}>
      <UserProvider>
        <BookProvider>
          <CommentProvider>
            <Navbar />
            <Header />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/home" element={<Home />} />
              <Route path="/forum" element={<ReaderForum />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/me" element={<Profile />} />
              <Route path="/books" element={<BookList />} />
              <Route path="/books/:id" element={<BookDetails />} />
              <Route path="/comments" element={<CommentList />} />
              <Route path="/comments/:id" element={<CommentDetails />} />
              <Route path="/users/:user_id/books" element={<UserBookList />} />
              <Route path="/users/:user_id/books/new" element={<NewBookForm />} />
              <Route path="/users/:user_id/comments" element={<UserCommentList />} /> 
              <Route path="/users/:user_id/comments/new" element={<NewCommentForm />} />
              <Route path="/users/:user_id/comments/:id/edit" element={<UpdateCommentForm />} />       
            </Routes>
            <Footer />
          </CommentProvider>
        </BookProvider>
      </UserProvider>
    </div>
  );
};

export default App;
