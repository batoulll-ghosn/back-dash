const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const footerSchema = new Schema({
    address: { type: String, required: true },
    quater: { type: String, required: true },
    ophone: { type: String, required: true },
    mobilephone: { type: String, required: true }
})

const Footer = model('Footer', footerSchema);
module.exports = Footer;