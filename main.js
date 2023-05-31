const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'grace', 'html')));

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

// http://localhost:3333/test/JWP?lang=ko
app.get('/test/:name', function(req, res, next) {
  console.log('path', req.path);      // '/test/JWP'
  console.log('params', req.params);  // {name: 'JWP'}
  console.log('query', req.query);    // {lang: 'ko'}
  res.send('test중 콘솔을 보시오');
});

app.listen(3333);