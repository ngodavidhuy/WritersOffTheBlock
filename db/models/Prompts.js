const mongoose = require('mongoose');

const promptSchema = new mongoose.Schema({
  prompt: String
});

const Prompt = mongoose.model('prompts', promptSchema);


module.exports = Prompt;