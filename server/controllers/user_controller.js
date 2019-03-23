const User = require('../../db/models/Users');

exports.registerUser = async (req, res, next) => {
  if (req.body.firstName && 
    req.body.lastName && 
    req.body.email && 
    req.body.username && 
    req.body.password) {

      let availableEmail = await User.findOne({email: req.body.email}).count() < 1;
      let availableUsername = await User.findOne({username: req.body.username}).count() < 1;

      if (!availableEmail) {
        res.status(409).json(`This email ${req.body.email} is already in use.`);
      } else if (!availableUsername) {
        res.status(409).json(`This username ${req.body.username} is already taken.`)
      } else {
        let userData = {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          username: req.body.username,
          password: req.body.password
        }

        User.create(userData, function(error, user) {
          if (error) {
            res.status(500).end();
          } else {
            req.session.userId = user._id;
            res.status(201).end();
          }
        });
      }
  } 
};

exports.LogIn = function(req, res) {
  if (req.body.username && req.body.password) {
    User.authenticate(req.body.username, req.body.password, function(error, user) {
      if (error || !user) {
        console.log('CONTROLLER FAILURE');
        res.status(401).json(`Invalid username or incorrect password.`);
      } else {
        console.log('CONTROLLER SUCCESS');
        req.session.userId = user._id;
        console.log(req.session);
        res.status(201).end();
      }
    });
  }
}

exports.LogOut = function(req, res, next) {
  console.log(req.session);
  if (req.session) {
    req.session.destroy(function (err) {
      if (err) {
        res.status(500).end();
      } else {
        res.status(200).end();
      }
    });
  }
}