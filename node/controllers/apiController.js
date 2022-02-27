const controller = require('./controller')

class apiController extends controller {
    constructor() {
        super();
    }

    actionData(ctx) {
        ctx.body = [
            {
                id: 1,
                text: 'a'
            },
            {
                id: 2,
                text: 'b'
            }
        ]
    }
}

module.exports = apiController