import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/search">Search</Link> | <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;