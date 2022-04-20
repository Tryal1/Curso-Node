
//Las rutas
const { Router } = require('express')
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios')

const routes = Router()

//definimos las rutas con su tipo de peticion
//el call lo importamos de otro archivo y lo 
//ponemos como segundo paramero
routes.get('/', usuariosGet)

routes.put('/:id', usuariosPut)

routes.post('/', usuariosPost)

routes.delete('/', usuariosDelete)

routes.patch('/', usuariosPatch)

module.exports = routes