require('dotenv').config();
const mongoose = require('mongoose');
const searchSvc = require('./app/services/search');
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const {
  DB_URL,
  PORT
} = process.env;

app.use(morgan('combined'));
app.use(cors());
mongoose.connect(DB_URL, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.error(`Error connecting to db at ${DB_URL}`);
    return process.exit(1);
  }
  console.info(`${DB_URL} connected successfully.`);
});

app.get('/health-check', (req, res) => res.json({ message: 'May the force be with you.' }));

app.get('/titles/:name', async (req, res, next) => {
  const { name: title } = req.params;
  try {
    const results = await searchSvc.searchByTitle({ title });
    console.debug('Title results: ', results);
    res.json(results);
  } catch (error) {
    next(error)
  }
});

app.listen(PORT, () => console.info(`Server started at port ${PORT}`));

