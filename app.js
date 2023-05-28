var express = require('express');
var dotenv = require('dotenv');
// var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
var app = express();

console.log('listening');
console.log(process.env.PORT);
app.listen(process.env.PORT || 9000);
app.use(logger('dev'));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// module.exports = app;
exports.dcy = app;
