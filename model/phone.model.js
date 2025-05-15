const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('phoneEntity', phoneSchema, 'phone');