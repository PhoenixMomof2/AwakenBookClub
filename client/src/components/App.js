import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { UserProvider } from '../context/UserContext';
import Navbar from '../components/Navbar'
import Home from '../components/Home';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import BookList from '../components/BookList';
import BookItem from '../components/BookItem';


function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/books')
      .then(res => res.json())
      .then(books => setBooks(books))
    }, []);

  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/books" element={<BookList books={books}/>} />
          <Route exact path="/books/:id" element={<BookItem books={books}/>} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
