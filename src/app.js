const { ExpressLoader } = require('./loaders/express.loader');
var dotenv = require('dotenv');

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const { Config } = require('./configs/config');

var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const app = ExpressLoader.init();

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
