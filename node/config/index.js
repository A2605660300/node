const path= require('path')
let config={
    port: 3000,
    cache: false,
    viewDir: path.join(__dirname,'../','views'),
    staticDir: path.join(__dirname,'../','assets'),
}

if(process.env.NODE_ENV == 'development'){
    const devCofin={
        port: 3000,
        cache: false
    }
    config={...config,...devCofin}
}

if(process.env.NODE_ENV == 'production'){
    const proCofin={
        port: 80,
        cache: 'memory'
    }
    config={...config,...proCofin}
}

module.exports = config;