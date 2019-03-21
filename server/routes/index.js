const express = require('express');
const router = express.Router();
const User = require('../controllers/user_controller');
const Block = require('../controllers/block_controller');
const Prompt = require('../controllers/prompt_controller');

router.get('/prompt', Prompt.getOne);

router.get('/block/:userID', Block.getAll);

router.post('/block/:userID', Block.add);

router.post('/register', User.registerUser);

// router.delete('/blocks/:userID/:blockID', Blocks.deleteBlock);

module.exports = router;


