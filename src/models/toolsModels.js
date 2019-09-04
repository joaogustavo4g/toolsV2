const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

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

Tools.plugin(mongoosePaginate);

module.exports = model('tools', Tools);