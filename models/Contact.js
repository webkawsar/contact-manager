const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: String,
    email: String,
    dob: String,
    age: Number,
    dist: String
})

module.exports = new mongoose.model('Contact', contactSchema);