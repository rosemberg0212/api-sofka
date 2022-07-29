const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../db/config');

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT;

        this.path = {
            tipos: '/api/tipos',
            naves: '/api/naves'
        }

        //conectar BD
        this.conectarDB()

        //Middlewares
        this.Middlewares()

        //Rutas de mi aplicacion
        this.routes()
    }

    async conectarDB(){
        await dbConnection()
    }

    Middlewares(){
        //CORS
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static('public'))
    }
    
    routes(){
        this.app.use(this.path.tipos, require('../routes/tipo'))
        this.app.use(this.path.naves, require('../routes/nave'))
    }

    listem(){
        this.app.listen(this.port, ()=>{
            console.log('corriendo en el puerto', this.port)
        }) 
    }
}

module.exports = Server;