import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Home() {
  return <h1>Home Page</h1>;
}

function Search() {
  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    // Nanti kita akan mengambil data dari TMDB API di sini
    console.log('Mencari:', query);
  };

  return (
    <div>
      <h1>Search Page</h1>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {results.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/search">Search</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;