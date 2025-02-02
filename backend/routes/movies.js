const express = require('express');

const router = express.Router();

// Contoh route untuk pencarian film
router.get('/search', (req, res) => {
  res.json({ message: 'Search movies route works!' });
});

module.exports = router; // Pastikan ini ada