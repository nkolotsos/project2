var express = require('express');
var router = express.Router();
const listingsController = require('../controllers/listings');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /boardgames/:id/listings/new NEW
router.get('/boardgames/:id/listings/new', ensureLoggedIn, listingsController.new);
// // GET /listings/new NEW (New listing without a boardgame)
// router.get('/listings/new', ensureLoggedIn, listingsController.new);
// POST /listings CREATE
router.post('/boardgames/:id/listings', ensureLoggedIn, listingsController.create);
// DELETE /reviews DELETE
router.delete('/listings/:id', ensureLoggedIn, listingsController.delete);


module.exports = router;