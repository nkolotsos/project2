var express = require('express');
var router = express.Router();
const listingsController = require('../controllers/listings');

// GET /listings/new NEW
router.get('/listings/new', listingsController.new);
// POST /listings CREATE
router.post('/listings', listingsController.create);

module.exports = router;