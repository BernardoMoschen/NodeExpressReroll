const express = require('express');

const app = express();

app.listen('/', (_r, response) => {
  response.send('Hello World');
});

app.listen(() => console.log('server started at http://localhost:3000'));
