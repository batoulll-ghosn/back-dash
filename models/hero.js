const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const heroSchema = new Schema({
    heading: { type: String, required: true },
    headingg: { type: String, required: true }
});
const Hero = model('Hero', heroSchema);
module.exports = Hero;