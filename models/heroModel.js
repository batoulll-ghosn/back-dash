const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const HeroSchema = new Schema({
    t_Welcome: { type: String, required: true },
    t_Company: { type: String, required: true },
    t_button: { type: String, required: true }
    // keyword: String,
});
const Hero = model('Hero', HeroSchema);

module.exports = Hero;


