const Boardgame = require('../models/boardgame');
const Listing = require('../models/listing');

async function newListing(req, res) {
  const boardgame = await Boardgame.findById(req.params.id);
  res.render("listings/new", { title: "New Listing", boardgame });
}

async function create(req, res) {
  req.body.boardgame = req.params.id;
  await Listing.create(req.body);
  res.redirect(`/boardgames/${req.params.id}`);
}

module.exports = {
    new: newListing,
    create
};

