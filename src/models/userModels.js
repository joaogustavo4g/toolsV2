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
        default: false
    },
    password: {
        type: String,
        required: true,
        select: false
    }
}, {
    timestamps: true
})

module.exports = model('user', User);