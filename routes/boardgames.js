var express = require('express');
var router = express.Router();
const boardgamesController = require('../controllers/boardgames');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /boardgames INDEX
router.get('/', boardgamesController.index);
// GET /boardgames/new NEW
router.get('/new', ensureLoggedIn, boardgamesController.new);
// GET /boardgames/:id SHOW
router.get('/:id', boardgamesController.show);
// POST /boardgames CREATE
router.post('/', ensureLoggedIn, boardgamesController.create);


module.exports = router;