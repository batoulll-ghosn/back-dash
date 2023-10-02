const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const experienceSchema = new Schema({
    title: { type: String, required: true },
    firstblue: { type: String, required: true },
    secondblue: { type: String, required: true },
    firstblack: { type: String, required: true },
    secondblack: { type: String, required: true },
});
const Experience = model('Experience', experienceSchema);
module.exports = Experience;