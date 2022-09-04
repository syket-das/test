const express = require('express');
const dotenv = require('dotenv');


const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!');
})


app.listen(process.env.PORT || 5000, () => {
    console.log('Example app listening on port 3000!');
})