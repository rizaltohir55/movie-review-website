const express = require('express');
const { addToWatchlist, getWatchlist } = require('../controllers/watchlistController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/watchlist', authMiddleware, addToWatchlist);
router.get('/watchlist', authMiddleware, getWatchlist);

module.exports = router;