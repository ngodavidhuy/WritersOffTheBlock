const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String
  },
  prompt: String,
  block: String,
  created_at: {
    type: Date,
    default: Date.now
  }
});


const Block = mongoose.model('blocks', blockSchema);


module.exports = Block;