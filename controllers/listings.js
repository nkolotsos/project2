const Boardgame = require('../models/boardgame');
const Listing = require('../models/listing');

async function newListing(req, res) {
  const boardgame = await Boardgame.findById(req.params.id);
  res.render("listings/new", { title: "New Listing", boardgame });
}

async function create(req, res) {
    req.body.boardgame = req.params.id;
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    await Listing.create(req.body);
    res.redirect(`/boardgames/${req.params.id}`);
}

async function deleteListing(req, res) {
  const listing = await Listing.findOne({ 'listings._id': req.params.id, 'listings.user': req.user._id });
  if (!listing) return res.redirect('/boardgames');
  await Listing.remove(req.params.id);
  res.redirect(`/boardgames/${boardgame._id}`);
}

module.exports = {
    new: newListing,
    create,
    delete: deleteListing
};
