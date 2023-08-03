const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviews');

// POST /boardgames/:id/reviews CREATE
router.post('/boardgames/:id/reviews', reviewsController.create);

module.exports = router;