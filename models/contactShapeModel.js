const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const contactShapeSchema = new Schema({
    contentName: { type: String, required: true },
    contentEmail: { type: String, required: true },
    contentMessage: { type: String, required: true },
    image: { type: String, required: true }
})

const ContactShape = model('ContactShape', contactShapeSchema);
module.exports = ContactShape;