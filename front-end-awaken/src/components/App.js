import React from "react";
import { Route, Routes } from "react-router-dom";

//context
import { UserProvider } from "../context/UserContext";
import { BookProvider } from "../context/BookContext";
import { CommentProvider } from "../context/CommentContext";

//static pages
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";

//auth forms
import SignUp from "../components/SignUp";
import Login from "../components/Login";

//dynamic pages
import BookList from "../components/BookList";
import BookDetails from "../components/BookDetails";
import NewCommentForm from "../components/NewCommentForm";
import CommentsList from "../components/CommentsList";

const App = () => {
  return (
    <div className="App bg-danger">
      <UserProvider>
        <BookProvider>
          <CommentProvider>
            <Navbar />
            <Header />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/books" element={<BookList />} />
              <Route path="/books/:id" element={<BookDetails />} />
              <Route path="/comments" element={<CommentsList />} />
              <Route path="/comments/new" element={<NewCommentForm />} />              
            </Routes>
            <Footer />
          </CommentProvider>
        </BookProvider>
      </UserProvider>
    </div>
  );
};

export default App;
