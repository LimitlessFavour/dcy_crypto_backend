var express = require('express');
var dotenv = require('dotenv');

const { Config } = require('./configs/config');

// var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
var app = express();

const port = Number(Config.PORT);
app.listen(port, () => console.log(`
  ==================================
  🚀 Server running on port ${port}!🚀
  ==================================
`));

app.use(logger('dev'));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
