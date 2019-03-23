const Blocks = require('../../db/models/Blocks');
const User = require('../../db/models/Users');

exports.getUserBlocks = async (req, res) => {
  // your code here
  let user = await User.findById(req.session.userId);
  Blocks.find({username: user.username}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(data);
    res.status(200).json(data);
  });
}

exports.postNewBlock = async (req, res) => {
  // your code here
  res.status(201).send();
  let user = await User.findById(req.session.userId);
  
  let userPost = {
    username: user.username,
    email: user.email,
    prompt: req.body.prompt,
    content: req.body.content
  }

  Blocks.create(userPost, function(error, results) {
    if (error) {
      res.status(500).end();
    } else {
      res.status(201).end();
    }
  });
}