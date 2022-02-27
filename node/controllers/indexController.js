const controller = require('./controller')

class indexController extends controller {
    constructor() {
        super();
    }

    async actionIndex(ctx) {
        // throw new Error('自定义错误');
        ctx.body = await ctx.render('index')
    }
}

module.exports = indexController