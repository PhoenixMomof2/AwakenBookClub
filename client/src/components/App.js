import React from 'react';
import { Route, Routes } from "react-router-dom";
import { UserProvider } from '../context/UserContext';
import { BookProvider } from '../context/BookContext';
import Navbar from '../components/Navbar'
import Home from '../components/Home';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import BookList from '../components/BookList';
import BookItem from '../components/BookItem';

function App({books, oneBook, id}) {
 console.log("I'm in the App Component")
  return (
    <div className="App">
      <UserProvider>
        <BookProvider>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/books" element={<BookList myBooks={books}/>} />
          <Route exact path="/books/:id" element={<BookItem key={id} oneBook={oneBook}/>} />
        </Routes>
        </BookProvider>
      </UserProvider>
    </div>
  );
}

export default App;
