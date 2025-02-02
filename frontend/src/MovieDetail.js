import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MovieDetail({ movie }) {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);

  // Fungsi untuk mengirim review
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

  // Fungsi untuk menambahkan film ke favorit
  const handleAddToFavorites = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/favorites',
        { movieId: movie.id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Added to favorites');
    } catch (error) {
      alert('Failed to add to favorites: ' + error.response?.data?.message);
    }
  };

  // Fungsi untuk menambahkan film ke watchlist
  const handleAddToWatchlist = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/watchlist',
        { movieId: movie.id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Added to watchlist');
    } catch (error) {
      alert('Failed to add to watchlist: ' + error.response?.data?.message);
    }
  };

  // Mengambil review untuk film tertentu saat komponen dimuat
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/reviews/${movie.id}`);
        setReviews(response.data);
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      }
    };
    fetchReviews();
  }, [movie.id]);

  return (
    <div>
      {/* Informasi Film */}
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>

      {/* Tombol Favorit dan Watchlist */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={handleAddToFavorites}>Add to Favorites</button>
        <button onClick={handleAddToWatchlist}>Add to Watchlist</button>
      </div>

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

      {/* Daftar Review */}
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            <strong>{review.userId.username}</strong>: {review.comment} ({review.rating}/5)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieDetail;