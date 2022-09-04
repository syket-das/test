const express = require('express');
const dotenv = require('dotenv');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the techee api');
});

app.get('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Example app listening on port 3000!');
});
