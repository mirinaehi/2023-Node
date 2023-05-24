const express = require('express');

const app = express();

app.get('/', function(req, res, next) {
  res.send('Hello World');
});

app.listen(3333);