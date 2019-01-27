require('dotenv').config();
const mongoose = require('mongoose');
const Title = require('./lib/models/title');
const {
  DB_URL
} = process.env;

const start = async () => {
  mongoose.connect(DB_URL, { useNewUrlParser: true });
  const titles = await Title.find({});
  console.log(titles);
};

start();
