const mongoose = require('mongoose');
require('colors');


const conexionBaseDeDatos = async () =>{

    try {
        
        await mongoose.connect(process.env.DBCONNECTION);
        console.log('Base de datos online!'.blue);


    } catch (error) {
        throw new Error('Error al conectar a la base de datos!'.red);
    }


}

module.exports = conexionBaseDeDatos;



