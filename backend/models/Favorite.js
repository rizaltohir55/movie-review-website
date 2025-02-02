const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  movieId: { type: Number, required: true }, // ID film dari TMDB API
});

module.exports = mongoose.model('Favorite', favoriteSchema);