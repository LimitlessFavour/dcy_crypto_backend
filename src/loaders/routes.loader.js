/* Routes */
const authRouter = require('../routes/user.routes');
const userRouter = require('../routes/wallet.routes');

class RoutesLoader {
    static initRoutes (app, version) {
        app.use(`/api/${version}/user`, authRouter);
        app.use(`/api/${version}/wallet`, userRouter);
    }
}

module.exports = {RoutesLoader};