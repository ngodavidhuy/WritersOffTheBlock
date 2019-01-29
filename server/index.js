const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../db');
const Blocks = require('./controllers/block_controller');
const Prompts = require('./controllers/prompt_controller');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist/')));

app.get('/prompts', Prompts.getOne);

app.get('/blocks/:userID', Blocks.getAll);

app.post('/blocks/:userID', Blocks.add);

// app.delete('/blocks/:userID/:blockID', Blocks.deleteBlock);

const PORT = 3005;
app.listen(PORT, () => { console.log(`Listening on port ${PORT} because of the internet.`); });

