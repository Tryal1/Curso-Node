//Es la respuesta res = response
const { response, request } = require('express')

const usuariosGet = (req = request, res = response) => {
    //el query es lo que viene en la url dps del ?
    //tmb se le pueden poner valores por defecto
    const {q , nombre = 'No name', limit , page} = req.query;
    res.json({
        msg: 'get Api - Controlador',
        q,
        nombre,
        limit,
        page
    })
}

const usuariosPost = (req, res) => {
    //Tambien podemos hacer un destructuring
    const body = req.body;

    res.json({
        msg: 'put Api - Controlador',
        body
    })
}

const usuariosPut = (req, res) => {

    //agarramos el id que se le pasa como parametro por url
    const id = req.params.id;

    res.json({
        msg: 'post Api - Controlador',
        id
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete Api - Controlador',
    })
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'delete Api - Controlador',
    })
}

module.exports={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}