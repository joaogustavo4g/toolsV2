const { Schema, model } = require('mongoose')

const Tools = new Schema({
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    tags: [{
        type: String,
        require: true

    }]
},{
    timestamps: true
})

module.exports = model('tools', Tools);