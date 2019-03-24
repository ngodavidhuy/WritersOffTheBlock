const express = require('express');
const router = express.Router();
const User = require('../controllers/user_controller');
const Block = require('../controllers/block_controller');
const Prompt = require('../controllers/prompt_controller');

router.get('/prompt', Prompt.getPrompt);

router.get('/block', Block.getUserBlocks);

router.post('/block', Block.postNewBlock);

router.delete('/block', Block.deleteBlock);

router.post('/register', User.registerUser);

router.post('/login', User.LogIn);

router.get('/logout', User.LogOut);

module.exports = router;