const { request, response } = require("express");
const User = require('../models/user.model');



const newUser = async ( req = request, res = response ) =>{

    const { name, email, password } = req.body;

    const user = new User({
        name,
        email,
        password
    });

    try {
        await user.save({new: true});
        return res.json({
            msg: 'Ok',
            user
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


