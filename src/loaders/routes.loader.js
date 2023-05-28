/* Routes */
const userRouter = require('../routes/user.routes');
const walletRouter = require('../routes/wallet.routes');


class RoutesLoader {
    static initRoutes (app, version) {
        app.use(`/api/${version}/user`, userRouter);
        app.use(`/api/${version}/wallet`, walletRouter);
    }
}

module.exports = {RoutesLoader};