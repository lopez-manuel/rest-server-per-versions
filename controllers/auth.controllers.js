const { request, response } = require("express");



const usuario = ( req = request, res = response ) => {

    res.json({
        msg: 'Peticion get exitoa'
    })

}


const login = ( req = request, res = response ) =>{

    res.json({
        msg: 'Peticion post exitosa'
    })

}


module.exports = {
    usuario,
    login
}


