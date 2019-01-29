const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({
  userID: {
    type: Number
  },
  log_number: {
    type: Number,
    unique: true
  },
  block: String,
  email: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});


const Block = mongoose.model('blocks', blockSchema);


module.exports = Block;