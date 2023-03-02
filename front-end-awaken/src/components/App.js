import React from "react";
import { Route, Routes } from "react-router-dom";

//context
import { UserProvider } from "../context/UserContext";
import { BookProvider } from "../context/BookContext";
import { CommentProvider } from "../context/CommentContext";

//static pages
import Navbar from "../components/Navbar";
import About from "../components/About";
import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";

//auth forms
import SignUp from "../components/SignUp";
import Login from "../components/Login";

//dynamic pages
import Profile from "../components/Profile";
import ReaderForum from "../components/ReaderForum";
import BookList from "../components/BookList";
import BookDetails from "../components/BookDetails";
import CommentList from "../components/CommentList";
import CommentDetails from "../components/CommentDetails";
import UserBookList from "../components/UserBookList";
import UserBookCard from "../components/UserBookCard";
import NewBookForm from "../components/NewBookForm";
import UserCommentList from "../components/UserCommentList";
import UserCommentCard from "../components/UserCommentCard";
import NewCommentForm from "../components/NewCommentForm";

const App = () => {
  return (
    <div className="container-flex bg-danger">
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
              <Route path="/users/:user_id/books/:id" element={<UserBookCard />} />
              <Route path="/users/:user_id/books/new" element={<NewBookForm />} />
              <Route path="/users/:user_id/comments" element={<UserCommentList />} /> 
              <Route path="/users/:user_id/comments/:id" element={<UserCommentCard />} /> 
              <Route path="/users/:user_id/comments/new" element={<NewCommentForm />} />
            </Routes>
            <Footer />
          </CommentProvider>
        </BookProvider>
      </UserProvider>
    </div>
  );
};

export default App;
