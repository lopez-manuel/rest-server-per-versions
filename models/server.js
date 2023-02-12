const express = require('express');
const authRoutes = require('../routes/auth.route');
const userRoutes = require('../routes/users.route');
const cors = require('cors');
const conexionBaseDeDatos = require('../mongoDB/config');
require('colors');
require('dotenv').config();

class Server {

    port = process.env.PORT;
    app = express();

    constructor(){
        this.listen();
        this.middlewares();
        this.routes();
        this.DB();
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor iniciado en el puerto ${this.port}`.blue);
        })
    }

    middlewares(){

        this.app.use( express.json() );
        this.app.use( cors() );
        this.app.use( express.static( 'public' ));

    }

    routes(){
        this.app.use('/api/auth', authRoutes );
        this.app.use('/api/users', userRoutes)
    }

    async DB(){
        await conexionBaseDeDatos();
    }


}

module.exports = Server;



