const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const FootSchema = new Schema({
    t_Address: { type: String, required: true },
    t_Headquarter: { type: String, required: true },
    t_Telephone: { type: String },
    t_Mobile: { type: String }
    // keyword: String,
});
const Foot = model('Foot', FootSchema);

module.exports = Foot;

