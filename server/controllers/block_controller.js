const Blocks = require('../../db/models/Blocks');

exports.getAll = (req, res) => {
  // your code here
  Blocks.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(data);
  });
}

exports.add = (req, res) => {
  // your code here
  Blocks.insertMany([req.body], (err, results) => {
    if (err) {
      res.status(422).send(err)
    } else {
      res.status(201).redirect('/');
    }
  });

}