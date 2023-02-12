const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        require: [true,'El name es requerido']
    },
    email: {
        type: String,
        require: [true, 'El email es requerido'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'El password es requerido']
    }
})

module.exports = model('user', UserSchema )




