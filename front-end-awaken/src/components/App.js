import React from 'react';
import { Route, Routes } from "react-router-dom";
import { UserProvider } from '../context/UserContext';
import { BookProvider } from '../context/BookContext';
import { BookGroupsProvider } from '../context/BookGroupContext';
import Navbar from '../components/Navbar'
import Header from '../components/Header';
import Home from '../components/Home';
import Footer from '../components/Footer';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import UserProfile from '../components/UserProfile';
import BookList from '../components/BookList';
import BookDetails from '../components/BookDetails';
// import NewBookForm from '../components/NewCommentForm';
import BookGroup from '../components/BookGroup';
import BookCommentsList from '../components/BookCommentsList';


const App = () => {
 console.log("I'm in the App Component")
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
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetails />} /> 
          {/* <Route path="/books/new" element={<NewCommentForm />} />  */}
          <Route path="/book_groups" element={<BookGroup />} /> 
          <Route path="book_groups/book_id/comments" element={<BookCommentsList/>} /> 
        </Routes>
        <Footer />
      </BookGroupsProvider>
      </BookProvider>
      </UserProvider>
    </div>
  );
}

export default App;
