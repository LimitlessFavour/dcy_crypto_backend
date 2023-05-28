var express = require('express');

var dotenv = require('dotenv');
// var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
var app = express();

app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

exports.dcy = app;
// module.exports = app;

//const projectId = process.env.STAGING_PROJECT_ID;
