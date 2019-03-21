const User = require('../../db/models/Users');

exports.registerUser = async (req, res, next) => {
  if (req.body.firstName && 
    req.body.lastName && 
    req.body.email && 
    req.body.username && 
    req.body.password) {

      let userData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      }

      let availableEmail = await User.findOne({email: req.body.email}).count() < 1;
      let availableUsername = await User.findOne({username: req.body.username}).count() < 1;

      if (!availableEmail) {
        res.status(409).send(`This email ${req.body.email} is already in use`);
      } else if (!availableUsername) {
        res.status(409).json(`This username ${req.body.username} is already taken.`)
      } else {
        console.log('SIGN ME UP')
      }

  } 
};