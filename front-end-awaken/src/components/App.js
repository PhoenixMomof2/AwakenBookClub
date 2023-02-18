import React, { useContext } from "react";
import { Route, Routes, Navigate, useParams } from "react-router-dom";

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
import UserBookGroups from "../components/UserBookGroups";
import BookCommentsList from "../components/BookCommentsList";
import BookGroupsDisplay from "./BookGroupsDisplay";

const App = () => {
  const loggedIn = useContext(UserContext);
  const { user_id, id } = useParams()
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
              <Route path={`/users/${user_id}`} element={<UserProfile />} />
              <Route path="/books" element={<BookList /> }/>
              <Route path="/books/:id" element={<BookDetails />} />
              <Route path="/books_groups" element={<BookGroupsDisplay /> }/>
              <Route path="/users/:user_id/books/:id" element={<UserBookList />} />
              <Route path="/users/:user_id/book_groups/:id" element={<UserBookGroups />} />
              <Route path="/comments" element={<BookCommentsList />} />
              {/* <Route path="/book_groups/new" element={<NewCommentForm />} /> */}
            </Routes>
            <Footer />
          </BookGroupsProvider>
        </BookProvider>
      </UserProvider>
    </div>
  );
};

export default App;
