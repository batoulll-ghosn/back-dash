const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const whyusSchema = new Schema({
    whyus: { type: String, required: true },
    firsttick: { type: String, required: true },
    secondtick: { type: String, required: true },
    thirdtick: { type: String, required: true },
    sfirsttick: { type: String, required: true },
    ssecondtick: { type: String, required: true },
    sthirdtick: { type: String, required: true },
    image: { type: String }
});

const Whyus = model('Whyus', whyusSchema);

module.exports = Whyus;
