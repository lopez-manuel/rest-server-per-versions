const { Router } = require('express');
const { newUser } = require('../controllers/users.controller');
const router = Router();

require('colors');

router.use( ( request, response, next ) =>{

    const peticion = request.method.green;

    const fecha = new Date().toString().green;

    console.log( ` Tipo de peticion: ${ peticion }, fecha: ${ fecha }, ruta: ${('/usuarios'+ request.url).green}` );

    next();

})

router.post('/', newUser);


module.exports = router;


