const { Router } = require('express');
const { login, usuario } = require('../controllers/auth.controllers');
const router = Router();

require('colors');

router.use( ( request, response, next ) =>{

    const peticion = request.method.green;

    const fecha = new Date().toString().green;

    console.log( ` Tipo de peticion: ${ peticion }, fecha: ${ fecha }, ruta: ${('/usuarios'+ request.url).green}` );

    next();

})

router.get('/me', usuario );

router.post('/login', login )


module.exports = router;



