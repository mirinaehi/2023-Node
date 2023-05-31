const express = require('express');

const app = express();

// 모든 경로에 요청
app.get('*', function(req, res, next) {
  console.log('당장');
  next();
})

// 루트(/) 경로에 요청
app.get('/', function(req, res, next) {
  console.log('진행시켜');
  next();
});

app.listen(3333);