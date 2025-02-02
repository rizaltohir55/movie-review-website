const express = require('express');
const { addToFavorites, getFavorites } = require('../controllers/favoriteController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/favorites', authMiddleware, addToFavorites);
router.get('/favorites', authMiddleware, getFavorites);

module.exports = router;