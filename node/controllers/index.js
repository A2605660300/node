const Router=require('@koa/router');
const IndexController=require('./indexController');
const ApiController=require('./apiController');

const router=new Router();
const indexController=new IndexController();
const apiController=new ApiController();

function instController (app){
    router.get('/', indexController.actionIndex);
    router.get('/api/getData', apiController.actionData);

      app
        .use(router.routes())
        .use(router.allowedMethods());
}

module.exports = instController