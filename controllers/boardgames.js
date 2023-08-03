const Boardgame = require('../models/boardgame');

function newBoardgame(req, res) {
    res.render("boardgames/new", { title: "New Board Game", errorMsg: "" });
}

async function create(req, res) {
    try {
      await Boardgame.create(req.body);
      res.redirect('/boardgames');
    } catch (err) {
      console.log(err);
      res.render('boardgames/new', { title: "New Board Game", errorMsg: err.message });
    }
}

async function index(req, res) {
    const boardgames = await Boardgame.find({});
    res.render('boardgames/index', { title: 'All Board Games', boardgames });
}

async function show(req, res) {
    const boardgame = await Boardgame.findById(req.params.id);
    res.render('boardgames/show', { title: boardgame.name, boardgame });
}

module.exports = {
    new: newBoardgame,
    create,
    index,
    show
};