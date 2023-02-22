import React from "react";
import { Route, Routes } from "react-router-dom";

//context
import { UserProvider } from "../context/UserContext";
import { BookProvider } from "../context/BookContext";
import { BookGroupsProvider } from "../context/BookGroupsContext";

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
<<<<<<< HEAD
import NewCommentForm from "../components/NewCommentForm";
import BookGroups from "./BookGroups";
=======
// import NewCommentForm from "../components/NewCommentForm";
import UserBookGroups from "../components/UserBookGroups";
>>>>>>> 949f89fbce1e74c3b4ede59f3fbb6f1090b53f10
import BookCommentsList from "../components/BookCommentsList";
import BookGroupsDisplay from "./BookGroupsDisplay";

const App = () => {
  
  return (
    <div className="App bg-danger">
      <UserProvider>
        <BookProvider>
          <BookGroupsProvider>
            <Navbar/>
            <Header/>
            <Routes>
<<<<<<< HEAD
              <Route path="/home" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<SignUp/>} />
              <Route path="/books" element={<BookList/>} />
              <Route path="/books/:id" element={<BookDetails/>} />
              <Route path="/book_groups" element={<BookGroups/>} />
              <Route path="/book_groups/new" element={<NewCommentForm />} />
              <Route path="/comments" element={<BookCommentsList />} />
=======
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path={`/users/${user_id}`} element={<UserProfile />} />
              <Route path="/books" element={<BookList /> }/>
              <Route path="/books/:id" element={<BookDetails />} />
              <Route path="/books_groups" element={<BookGroupsDisplay /> }/>
              <Route path="/users/:user_id/books/:id" element={<UserBookList />} />
              <Route path="/users/:user_id/book_groups/:id" element={<UserBookGroups />} />
              <Route path="/comments" element={<BookCommentsList />} />
              {/* <Route path="/book_groups/new" element={<NewCommentForm />} /> */}
>>>>>>> 949f89fbce1e74c3b4ede59f3fbb6f1090b53f10
            </Routes>
            <Footer />
          </BookGroupsProvider>
        </BookProvider>
      </UserProvider>
    </div>
  );
};

export default App;
