const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /boardgames/:id/reviews CREATE
router.post('/boardgames/:id/reviews', ensureLoggedIn, reviewsController.create);
// DELETE /reviews DELETE
router.delete('/reviews/:id', ensureLoggedIn, reviewsController.delete);

module.exports = router;