const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const service = new Schema({ 
    title1: { type: String, required: true },
    title2: {type:String, required:true},
    Paragraph1: { type: String, required: true },
    tick1:{ type: String, required: true },
    tick2:{ type: String, required: true },
    tick3:{ type: String, required: true }
})

const Service = model ("Service",service);
module.export= Service;

