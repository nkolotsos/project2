const Boardgame = require('../models/boardgame');

async function create(req, res) {
    const boardgame = await Boardgame.findById(req.params.id);
    boardgame.reviews.push(req.body);
    try {
      await boardgame.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/boardgames/${boardgame._id}`);
}

module.exports = {
    create
};