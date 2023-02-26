import React from "react";
import { Route, Routes } from "react-router-dom";

//context
import { UserProvider } from "../context/UserContext";
import { BookProvider } from "../context/BookContext";
import { CommentProvider } from "../context/CommentContext";

//static pages
import Navbar from "../components/Navbar";
// import OffCanvas from "../components/OffCanvas";
import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";

//auth forms
import SignUp from "../components/SignUp";
import Login from "../components/Login";

//dynamic pages
import Profile from '../components/Profile';
import BookList from "../components/BookList";
import UserBookList from "../components/UserBookList";
import BookDetails from "../components/BookDetails";
import UserComments from "../components/UserComments";
import NewCommentForm from "../components/NewCommentForm";
import UpdateCommentForm from "../components/UpdateCommentForm";
import CommentsList from "../components/CommentsList";

const App = () => {
  return (
    <div className="App bg-danger">
      <UserProvider>
        <BookProvider>
          <CommentProvider>
            <Navbar />
            {/* <OffCanvas /> */}
            <Header />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/me" element={<Profile />} />
              <Route path="/user/books" element={<UserBookList />} /> 
              <Route path="/user/comments" element={<UserComments />} />
              <Route path="/books" element={<BookList />} />
              <Route path="/books/:id" element={<BookDetails />} />
              <Route path="/comments" element={<CommentsList />} />
              <Route path="/comments/new" element={<NewCommentForm />} />     
              <Route path="/comments/:id/edit" element={<UpdateCommentForm />} />          
            </Routes>
            <Footer />
          </CommentProvider>
        </BookProvider>
      </UserProvider>
    </div>
  );
};

export default App;
