import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

function Search() {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    const apiKey = 'MASUKKAN_API_KEY_ANDA_DI_SINI'; // Ganti dengan API Key Anda
    const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: apiKey,
        query,
      },
    });
    setResults(response.data.results);
  };

  return (
    <div>
      <h1>Search Page</h1>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {results.map((movie) => (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;