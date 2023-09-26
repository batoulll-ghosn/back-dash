const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const batoulSchema = new Schema({
    whyus: { type: String, required: true },
    firsttick: { type: String, required: true },
    secondtick: { type: String, required: true },
    thirdtick: { type: String, required: true },
});
const Batoul = model('Batoul', batoulSchema);
module.exports = Batoul;