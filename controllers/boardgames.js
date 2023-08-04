const Boardgame = require('../models/boardgame');
const Listing = require('../models/listing');

function newBoardgame(req, res) {
    res.render("boardgames/new", { title: "New Board Game", errorMsg: "" });
}
    
async function create(req, res) {
    try {
      const existingBoardgame = await Boardgame.findOne({ name: req.body.name });
      if (existingBoardgame) {
        // Boardgame already exists
        return res.render('boardgames/new', { title: "New Board Game", errorMsg: "Boardgame already exists" });
      }
  
      const boardgame = await Boardgame.create(req.body);
      res.redirect(`boardgames/${boardgame._id}`);
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
    const listing = await Listing.find({boardgame: boardgame._id});
    res.render('boardgames/show', { title: boardgame.name, boardgame, listing });
}

module.exports = {
    new: newBoardgame,
    create,
    index,
    show
};