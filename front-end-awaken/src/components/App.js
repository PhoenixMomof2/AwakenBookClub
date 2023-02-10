import React from 'react';
import { Route, Routes } from "react-router-dom";
import { UserProvider } from '../context/UserContext';
import { BookProvider } from '../context/BookContext';
import Navbar from '../components/Navbar'
import Home from '../components/Home';
import Footer from '../components/Footer';
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
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={<UserProfile />} /> 
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetails />} /> 
        </Routes>
        <Footer />
        </BookProvider>
      </UserProvider>
    </div>
  );
}

export default App;
