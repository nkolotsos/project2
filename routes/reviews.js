const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /boardgames/:id/reviews CREATE
router.post('/boardgames/:id/reviews', ensureLoggedIn, reviewsController.create);
// DELETE /reviews DELETE
router.delete('/reviews/:id', ensureLoggedIn, reviewsController.delete);
// GET /reviews/:id/edit EDIT
router.get('/reviews/:id/edit', ensureLoggedIn, reviewsController.edit);
// PUT /reviews/:id UPDATE
router.put('/reviews/:id', ensureLoggedIn, reviewsController.update);

module.exports = router;