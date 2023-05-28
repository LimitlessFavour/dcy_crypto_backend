const { ExpressLoader } = require('./loaders/express.loader');
const { RoutesLoader } = require('./loaders/routes.loader');
var dotenv = require('dotenv');

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const { Config } = require('./configs/config');

var logger = require('morgan');

const app = ExpressLoader.init();

const version = "v1";
RoutesLoader.initRoutes(app, version);

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
