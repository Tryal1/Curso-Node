const express = require('express')
const cors = require('cors')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares()

        //Rutas de la App
        this.routes();
        this.listen();
    }

    middlewares(){

        //CORS
        this.app.use(cors());

        //lectura y parseo del body
        //los valores que vienen los pasa a json
        this.app.use(express.json())

        //Directorio publico que ve el usuario
        this.app.use(express.static('public'));

    }

    routes(){   
       this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Sv ',this.port)
        })
    }
}

module.exports = Server