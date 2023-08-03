const Boardgame = require('../models/boardgame');
const Listing = require('../models/listing');

async function newListing(req, res) {
  const boardgame = await Boardgame.findById(req.params.id);
  res.render("listings/new", { title: "New Listing", boardgame });
}

async function create(req, res) {
  try {
    req.body.boardgame = req.params.id;
    const listing = await Listing.create(req.body);
    console.log("New Listing:", listing);
    res.redirect(`/boardgames/${req.params.id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
    new: newListing,
    create
};
