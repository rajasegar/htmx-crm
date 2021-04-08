const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');
const compression = require('compression');

const PORT = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'pug');
app.use(express.static('assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression());

app.get('/', (req, res) => {
  res.render('index');
  //res.redirect('/login');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.listen(PORT);
console.log('Listening on port: ', PORT);
