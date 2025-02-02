import React, { useState } from 'react';
import axios from 'axios';

function MovieDetail({ movie }) {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Ambil token JWT dari localStorage
      await axios.post(
        'http://localhost:5000/api/reviews',
        { movieId: movie.id, rating, comment },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Review submitted successfully');
    } catch (error) {
      alert('Failed to submit review: ' + error.response?.data?.message);
    }
  };

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>

      {/* Form Review */}
      <form onSubmit={handleSubmit}>
        <h2>Write a Review</h2>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          placeholder="Rating (1-5)"
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Your review"
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default MovieDetail;