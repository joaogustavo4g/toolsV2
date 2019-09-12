const { Schema, model } = require('mongoose')

const User = new Schema({
    user: {
        type: String,
        required: true,
        unique: true
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    password: {
        type: String,
        required: true,
        select: false,
        unique: true
    }
},{
    timestamps: true
})

module.exports = model('user', User);