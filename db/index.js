const mongoose = require('mongoose');
// const config = require('../config').db;

//REMOTE
// const mongoURI = `mongodb://${config.username}:${config.password}@${config.host}:${config.port}/${config.db_name}`

//LOCAL
const mongoURI = `mongodb://localhost:27017/MVP`;

const db = mongoose.connect(mongoURI, {useNewUrlParser: true});

db
  .then( () => console.log(`Connected to: ${mongoURI}`))
  .catch( err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
    console.log(err);
  });

module.exports = db;