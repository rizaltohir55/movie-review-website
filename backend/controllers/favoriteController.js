const Favorite = require('../models/Favorite');

// Menambahkan film ke favorit
exports.addToFavorites = async (req, res) => {
  try {
    const { movieId } = req.body;
    const favorite = new Favorite({ userId: req.userId, movieId });
    await favorite.save();
    res.status(201).json({ message: 'Added to favorites' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Mendapatkan daftar favorit pengguna
exports.getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({ userId: req.userId });
    res.json(favorites);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};