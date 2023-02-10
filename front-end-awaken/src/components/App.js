import React from 'react';
import { Route, Routes } from "react-router-dom";
import { UserProvider } from '../context/UserContext';
import { BookProvider } from '../context/BookContext';
import Navbar from '../components/Navbar'
import Home from '../components/Home';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import UserProfile from '../components/UserProfile';
import BookList from '../components/BookList';
import BookDetails from '../components/BookDetails';

const App = () => {
 console.log("I'm in the App Component")
  return (
    <div className="App bg-danger">
      <UserProvider>
        <BookProvider>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={<UserProfile />} /> 
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetails />} /> 
          <Route path="/books/user_id/:id" />
        </Routes>
        </BookProvider>
      </UserProvider>
    </div>
  );
}

export default App;
