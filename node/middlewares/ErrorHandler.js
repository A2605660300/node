class ErrorHandler {
    static error(app){
        app.use(async (ctx,next)=>{
            try{
                await next();
                if(ctx.status===404){
                    ctx.body='404错误'
                }
            }
            catch{
                ctx.body='500 服务器错误'
            }
        })
    }
}

module.exports = ErrorHandler;