import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Movie Review Website</h1>
      <p className="mt-4 text-gray-700">Find your favorite movies and share your thoughts!</p>
    </div>
  );
}

function Search() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold text-green-600">Search Page</h1>
      <p className="mt-4 text-gray-700">Search for movies here.</p>
    </div>
  );
}

function Login() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold text-red-600">Login Page</h1>
      <p className="mt-4 text-gray-700">Login to your account.</p>
    </div>
  );
}

function Register() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold text-purple-600">Register Page</h1>
      <p className="mt-4 text-gray-700">Create a new account.</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold hover:text-gray-300">
            Movie Review
          </Link>
          <div className="space-x-4">
            <Link to="/search" className="hover:text-gray-300">
              Search
            </Link>
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
            <Link to="/register" className="hover:text-gray-300">
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* Routing */}
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;