const { body } = require("express-validator");
const User = require('../models/user.model');



const email = body('email','El email esta vacio o no es valido').isEmail().not().isEmpty().custom( async (value)=>{

    const emailExistInDB = await User.findOne({email:value});

    if(emailExistInDB){
        throw new Error('El email ya esta registrado');
    }

    return true;

})


module.exports = {
    email
}

