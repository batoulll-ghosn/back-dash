const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const ServiceSChema = new Schema({
    title1: { type: String, required: true },
    title2: { type: String, required: true },
    paragraph1: { type: String, required: true },
    tick1: { type: String, required: true },
    tick2: { type: String, required: true },
    tick3: { type: String, required: true }
})

const Service = model('Services', ServiceSChema);
module.exports = Service;
