import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const apiKey = 'MASUKKAN_API_KEY_ANDA_DI_SINI';
    const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: apiKey,
        query,
      },
    });
    setResults(response.data.results);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Search Movies</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Cari film..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
        <button
          onClick={handleSearch}
          className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Cari
        </button>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {results.map((movie) => (
          <li key={movie.id} className="bg-white p-4 rounded shadow-md">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-48 object-cover rounded"
            />
            <p className="mt-2 font-bold">{movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;