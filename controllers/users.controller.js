const { request, response } = require("express");
const bcryptjs = require('bcryptjs');
const User = require('../models/user.model');

const newUser = async ( req = request, res = response ) =>{

    const { name, email, password } = req.body;

    const salt = bcryptjs.genSaltSync(10);

    const pass = bcryptjs.hashSync(password,salt);

    const user = new User({
        name,
        email,
        password: pass
    });

    try {
        await user.save({new: true});
        return res.json({
            msg: 'Ok',
            user,
        })

    } catch (error) {
        
        return res.json({
            error,
            user
        })
    
    }

}


module.exports = {
    newUser
}


