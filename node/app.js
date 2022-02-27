const koa = require('koa');
const instControllers = require('./controllers');
const config = require('./config');
const render = require('koa-swig');
const co = require('co');
const static = require('koa-static');
const {historyApiFallback} = require('koa2-connect-history-api-fallback');
const errorHandler = require('./middlewares/ErrorHandler');

const app = new koa();

app.use(static(config.staticDir))
app.use(historyApiFallback({
    index: '/',
    whiteList: ['/api/getData']
}))

errorHandler.error(app);
instControllers(app);
app.context.render = co.wrap(render({
    root: config.viewDir,
    cache: config.cache, // disable, set to false
}));
app.listen(config.port, () => {
    console.log(`300端口监听成功 http://localhost:${config.port}`)
})