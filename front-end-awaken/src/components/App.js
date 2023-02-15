import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

//context
import { UserProvider, UserContext } from "../context/UserContext";
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
import UserProfile from "../components/UserProfile";
import BookList from "../components/BookList";
import UserBookList from "../components/UserBookList";
import BookDetails from "../components/BookDetails";
// import NewCommentForm from "../components/NewCommentForm";
import BookGroups from "./BookGroups";
import UserBookGroups from "../components/UserBookGroups";
import BookCommentsList from "../components/BookCommentsList";

const App = () => {
  const loggedIn = useContext(UserContext);
  console.log("I'm in the App Component");
  return (
    <div className="App bg-danger">
      <UserProvider>
        <BookProvider>
          <BookGroupsProvider>
            <Navbar />
            <Header />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/users/:id" element={<UserProfile />} />
              <Route
                path="/books"
                element={ loggedIn ? <Navigate to="users/:id/books" /> : <BookList /> }/>
              <Route path="/books/:id" element={<BookDetails />} />
              <Route path="/users/:id/books" element={<UserBookList />} />
              <Route
                path="/book_groups"
                element={ loggedIn ? <Navigate to="/users/:id/book_groups/" /> : <BookGroups /> }
              />
              <Route
                path="/users/:id/book_groups"
                element={<UserBookGroups />}
              />
              {/* <Route
                path="/users/:id/book_groups/new"
                element={<NewCommentForm />}
              /> */}
              <Route
                path="/users/:id/books/comments"
                element={<BookCommentsList />}
              />
            </Routes>
            <Footer />
          </BookGroupsProvider>
        </BookProvider>
      </UserProvider>
    </div>
  );
};

export default App;
