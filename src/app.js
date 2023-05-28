const { ExpressLoader } = require('./loaders/express.loader');
const { RoutesLoader } = require('./loaders/routes.loader');
const { Config } = require('./configs/config');

const app = ExpressLoader.init();

const version = "v1";
RoutesLoader.initRoutes(app, version);

const port = Number(Config.PORT);
app.listen(port, () => console.log(`
  ==================================
  🚀 Server running on port ${port}!🚀
  ==================================
`));


// app.use('/', indexRouter);
// app.use('/users', usersRouter);

module.exports = app;
