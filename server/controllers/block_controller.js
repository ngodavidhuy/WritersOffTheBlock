const Blocks = require('../../db/models/Blocks');
const User = require('../../db/models/Users');

exports.getUserBlocks = async (req, res) => {
  let user = await User.findById(req.session.userId);
  Blocks.find({username: user.username}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(data);
    }
  });
};

exports.postNewBlock = async (req, res) => {
  let user = await User.findById(req.session.userId);
  
  let userPost = {
    username: user.username,
    email: user.email,
    prompt: req.body.prompt,
    content: req.body.content
  }

  Blocks.create(userPost, function(error) {
    if (error) {
      res.status(500).end();
    } else {
      res.status(201).end();
    }
  });
};

exports.deleteBlock = async (req, res) => {
  if (req.session.userId) {
    let _id = req.body._id;
    Blocks.findByIdAndDelete(_id, (error) => {
      if (error) {
        res.status(500).end();
      } else {
        res.status(202).end();
      }
    });
  }
}