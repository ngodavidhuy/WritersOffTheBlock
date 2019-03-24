const mongoose = require('mongoose');
let bcrypt = require('bcrypt');
let UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.statics.authenticate = function(username, password, cb) {
  User.findOne({username}).exec(function(error, user) {
    if (error) {
      return cb(error);
    } else if (!user) {
      var err = new Error('User not found.');
      err.status = 401;
      return cb(err)
    }

    bcrypt.compare(password, user.password, function(error, result) {
      if (result === true) {
        return cb(null, user);
      } else {
        return cb();
      }
    });
  })
}

UserSchema.pre('save', function(next) {
  let user = this;
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

const User = mongoose.model('User', UserSchema);
module.exports = User;