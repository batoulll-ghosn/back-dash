const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },

});
const USER = model('USER', userSchema);
module.exports = USER;