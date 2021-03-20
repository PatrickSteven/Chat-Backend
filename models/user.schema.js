const mongoose = require('mongoose');
//Esquema del autor
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required : true
    },
    description: {
        type: String,
        required : true
    },
    status: {
        type: String,
        required : true
    },
    password: {
        type: String,
        required : true
    },
    country: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true
    },
    phone: {
        type: String,
        required : true
    }
})

module.exports = mongoose.model('user', UserSchema);