const db = require('./index.js');
const Blocks = require('./models/Blocks');
const faker = require('faker');
require('events').EventEmitter.prototype._maxListeners = 1000;


async function seedMVP(outer, inner) {
  let counter = 5;
  for (let j = 0; j < outer; j++) {
    let batch = [];
    for (let i = 0; i < inner; i++) {
      let record = {
        userID: 1,
        log_number: counter,
        block: faker.lorem.paragraphs(),
        email: 'wavydavy@galvanize.com'
      };
      console.log(counter);
      counter++;
      batch.push(record);
    }
    await Blocks.insertMany(batch);
  }
}

async function timeSeed() {
  let before = Date.now();
  await seedMVP(1, 1);
  let after = Date.now();
  console.log(`MongoDB seeding finished in ${(after - before) / 60000} minutes!`)
} 

timeSeed();