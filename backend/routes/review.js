const express = require('express');
const { addReview, getReviews } = require('../controllers/reviewController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/reviews', authMiddleware, addReview); // Menambahkan review (harus login)
router.get('/reviews/:movieId', getReviews); // Mendapatkan review untuk film tertentu

module.exports = router;