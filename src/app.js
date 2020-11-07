const express = require('express')

class appController{
    constructor(){
        this.express = express

        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.express.use(express.json())
    }

    routes(){
        this.express.ise(require('./routes'))
    }
}

module.exports = new appController().express