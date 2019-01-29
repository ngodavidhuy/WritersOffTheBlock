const Prompts = require('../../db/models/Prompts');

exports.getOne = (req, res) => {
  // your code here
  Prompts.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(data);
  });
}
