require('dotenv').config();
const mongoose = require('mongoose');
const searchSvc = require('./app/services/search');
const express = require('express');
const morgan = require('morgan');

const {
  DB_URL,
  PORT
} = process.env;


const start = async ({ dbUrl, port = 3000 }) => {
  const app = express();
  app.use(morgan('combined'));
  mongoose.connect(dbUrl, { useNewUrlParser: true });

  app.get('/titles/:name', async (req, res) => {
    const { name: title } = req.params;
    const results = await searchSvc.searchByTitle({ title });
    res.json(results);
  });

  app.listen(PORT, () => {
    console.info(`Server started at port: ${port}`);
  });
};

start({ dbUrl: DB_URL, port: PORT});
