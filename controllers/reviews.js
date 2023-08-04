const Boardgame = require('../models/boardgame');

async function create(req, res) {
    const boardgame = await Boardgame.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    boardgame.reviews.push(req.body);
    try {
      await boardgame.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/boardgames/${boardgame._id}`);
}

async function deleteReview(req, res) {
  const boardgame = await Boardgame.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
  if (!boardgame) return res.redirect('/boardgames');
  boardgame.reviews.remove(req.params.id);
  await boardgame.save();
  res.redirect(`/boardgames/${boardgame._id}`);
}

async function edit(req, res) {
  const boardgame = await Boardgame.findOne({'reviews._id': req.params.id});
  const review = boardgame.reviews.id(req.params.id);
  res.render('boardgames/edit', { review });
}

async function update(req, res) {
  const boardgame = await Boardgame.findOne({'reviews._id': req.params.id});
  const reviewSubdoc = boardgame.reviews.id(req.params.id);
  if (!reviewSubdoc.userId.equals(req.user._id)) return res.redirect(`/boardgames/${boardgame._id}`);
  reviewSubdoc.content = req.body.content;
  try {
    await boardgame.save();
  } catch (e) {
    console.log(e.message);
  }
  res.redirect(`/boardgames/${boardgame._id}`);
}

module.exports = {
    create,
    delete: deleteReview,
    edit,
    update
};