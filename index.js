const express = require('express');
const app = express();
const data = require('./data.json');
const PORT = process.env.PORT || 3000;

const cors = require('cors'); 

app.use(cors());

app.get('/api/all', (req, res) => {
  res.json(data);
});

app.get('/api/destinations', (req, res) => {
  res.json(data.destinations);
});

app.get('/api/crew', (req, res) => {
  res.json(data.crew);
});

app.get('/api/technology', (req, res) => {
  res.json(data.technology);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});