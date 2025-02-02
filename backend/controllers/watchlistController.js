const Watchlist = require('../models/Watchlist');

// Menambahkan film ke watchlist
exports.addToWatchlist = async (req, res) => {
  try {
    const { movieId } = req.body;
    const watchlist = new Watchlist({ userId: req.userId, movieId });
    await watchlist.save();
    res.status(201).json({ message: 'Added to watchlist' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Mendapatkan daftar watchlist pengguna
exports.getWatchlist = async (req, res) => {
  try {
    const watchlist = await Watchlist.find({ userId: req.userId });
    res.json(watchlist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
